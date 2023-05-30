import React, { useEffect, useState } from "react";
import CardAlbumMain from "../Home/CardAlbumMain";
import { getAllAlbums } from "../../api/apiAlbums";
import { myId } from "../../lib/myLib";
import Spinner from 'react-bootstrap/Spinner';
import ErrorToast from "../SesionCrearCuenta/ErrorToast";

const AdminDashboard = () => {
  const [dataAlbums, setDataAlbums] = useState([]);
  const [errorToken, setErrorToken] = useState(false);

  useEffect(() => {
    retriveDataAlbums();
  }, []);

  const retriveDataAlbums = async () => {
    const result = await getAllAlbums();
    console.log('BackResponse:..',result);
    if (result?.data?.result) {
      setDataAlbums([...result.data.result]);
      setErrorToken(false);
    }
    if(result?.response?.data){
      console.log(result.response.data);
      setErrorToken(true);
    }
  };

  const closeToast = ()=>{
    setErrorToken(false);
  }

  return (
    <div>
      <div className="py-3 d-flex flex-wrap gap-3 justify-content-center">
        {errorToken&&<ErrorToast msg={'Token has expired...'} isShowToast={errorToken} handleCloseToast={closeToast}/>}
        {dataAlbums.length>0?dataAlbums.map((album) => (
          <CardAlbumMain key={myId()} datos={album} />
        )):<Spinner/>
      }
      </div>
    </div>
  );
};

export default AdminDashboard;
