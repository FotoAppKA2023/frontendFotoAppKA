import CardAlbumMain from "../components/Home/CardAlbumMain";
import CardAlbumAside from "../components/Home/CardAlbumASide";
import { useEffect, useState } from "react";
import { getAllAlbums } from "../api/apiAlbums";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

export default function Dashboard() {
  const [albumList, setAlbumList] = useState([]);
  let cardsAside = [];
  useEffect(() => {
    ObtenerAlbums();
  }, []);
  const ObtenerAlbums = async () => {
    try {
      const resultado = await getAllAlbums();
      if (resultado.data) {
        //setAlbumList(resultado?.data?.result);
        setAlbumList(resultado?.data?.result);
        console.log("album Lista: ",albumList);
      }
    } catch (err) {}
  };
  const albumModel = {
    imagenUrl: "resultado.data.result[0].urlImages[0]",
    idRollo: "2",
    idScanner: "3",
    idCamara: "4",
  };
  const rolloModel = {
    imagenUrl:
      "https://www.fotojapon.com/media/images/products/641/16787441857wHYk-350.jpg",
    idRollo: "2",
    idScanner: "3",
    idCamara: "4",
  };

  return (
    <>
    <Navbar/>
<div
      style={{
        display: "flex",

        width: "100%",
      }}
    >
      <aside
        style={{
          width: "25%",
          height: "100vh",

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
            <CardAlbumAside datos={card} />
          ))}
          <h2 style={{ color: "black" }}>Rollos Favoritos</h2>
        </div>
      </aside>
      <main
        style={{
          width: "70%",
          display: "flex",
          gap: "5%",
          flexWrap: "wrap",
        }}
      >
          {albumList.map((card) => (
            <CardAlbumMain  datos={card} />
          ))}
      </main>
    </div>
    <Footer/>
    </>
    
  );
}
