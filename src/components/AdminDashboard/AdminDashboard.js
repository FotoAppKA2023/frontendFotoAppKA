import React, { useEffect, useState } from "react";
import CardAlbumMain from "../Home/CardAlbumMain";
import { getAllAlbums } from "../../api/apiAlbums";
import { myId } from "../../lib/myLib";

const AdminDashboard = () => {
  const [dataAlbums, setDataAlbums] = useState([]);

  useEffect(() => {
    retriveDataAlbums();
  }, []);

  const retriveDataAlbums = async () => {
    const result = await getAllAlbums();
    console.log(result.data.result);
    if (result?.data?.result) {
      setDataAlbums([...result.data.result]);
    }
  };

  return (
    <div>
      <div className="py-3 d-flex flex-wrap gap-3 justify-content-center">
        {dataAlbums.map((album) => (
          <CardAlbumMain key={myId()} datos={album} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
