import CardAlbumMain from "../components/Home/CardAlbumMain";
import CardAlbumAside from "../components/Home/CardAlbumASide";
import { useEffect, useState } from "react";
import { getAllAlbums } from "../api/apiAlbums";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'
import {myId} from '../lib/myLib';
import usePhoto from '../hooks/usePhoto';
import { useNavigate } from "react-router";

export default function Dashboard() {
  const [albumList, setAlbumList] = useState([]);
  const [usuariosList, setUsuariosList] = useState([]);
  const [cardDatos, setCardDatos]= useState([])
  const [dataPhotoUser]= usePhoto();
  const navigate = useNavigate();
  useEffect(() => {
    ObtenerAlbums()
   
  }, []);
  useEffect(()=>{
    if(!dataPhotoUser.id){
      navigate('/');
    }
  },[dataPhotoUser.id])

  /*const obtenerUsuarios = async () => {
    const resultado = await getAllPhotoUser();
    try {
      if (resultado.data) {

        setUsuariosList(resultado?.data?.result);
        
        console.log("lista de usuarios: ", usuariosList);
      }
    } catch {}
  };*/
  const ObtenerAlbums = async () => {
    try {
      const resultado = await getAllAlbums();
      if (resultado.data) {
        setAlbumList(resultado?.data?.result);
   
        
        console.log("Backend Response:.. ", resultado.data);
      }
    } catch (err) {}
  };

  return (
    < >
      <Navbar />
      <div
        style={{
          minHeight:"100vh",
          display: "flex",
          width: "100%",
          backgroundColor:"#5A5450"
        }}
      >
        <aside
          style={{
            width: "25%",
            height: "100vh",
            marginTop:"5vh", 
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              overflowY: "scroll",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ color: "black" }}>Albumes favoritos</h2>
            {albumList.map((card) => (
              <CardAlbumAside key={myId()} datos={card} />
            ))}
            <h2 style={{ color: "black" }}>Rollos Favoritos</h2>
          </div>
        </aside>
        <main
        className="d-flex flex-wrap gap-3"
          style={{
            marginBottom:"5px",
            marginTop:"5vh",
            width: "70%",
            //display: "flex",
            //Ugap: "5%",
            //flexWrap: "wrap",
          }}
        >
          {albumList.map((card) => (
            <CardAlbumMain key={myId()} datos={card} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
