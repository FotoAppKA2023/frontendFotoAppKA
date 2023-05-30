import CardAlbumMain from "../components/Home/CardAlbumMain";
import CardAlbumAside from "../components/Home/CardAlbumASide";
import { useEffect, useState } from "react";
import { getAllAlbums } from "../api/apiAlbums";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { myId } from "../lib/myLib";
import usePhoto from "../hooks/usePhoto";
import { useNavigate } from "react-router";
import ErrorToast from "../components/SesionCrearCuenta/ErrorToast";
import Spinner from 'react-bootstrap/Spinner';


export default function Dashboard() {
  const [albumList, setAlbumList] = useState([]);
  const [usuariosList, setUsuariosList] = useState([]);
  const [cardDatos, setCardDatos] = useState([]);
  const [dataPhotoUser, setDataPhotoUser] = usePhoto();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    ObtenerAlbums();
  }, []);
  useEffect(() => {
    if (!dataPhotoUser.id) {
      navigate("/");
    }
  }, [dataPhotoUser.id]);

  useEffect(() => {
    if (!dataPhotoUser.tokenActive) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [dataPhotoUser.tokenActive]);

  const handleCloseError = () => {
    setShowError(false);
  };
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
      if (resultado?.data) {
        setAlbumList(resultado?.data?.result);
        console.log("Backend Response:.. ", resultado);
        return
      }
      console.log("Backend Response:.. ", resultado);
      if (resultado?.response?.status !== 200) {
        console.log("Backend Error:.. ", resultado?.response?.data);
        setDataPhotoUser({
          ...dataPhotoUser,
          tokenActive: false,
        });
      }
    } catch (err) {
      console.log("error:..", err);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          width: "100%",
          backgroundColor: "#5A5450",
        }}
      >
        <aside
          style={{
            width: "25%",
            height: "100vh",
            marginTop: "5vh",
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
            {albumList.length===0&&<Spinner/>}
            {albumList.map((card) => (
              <CardAlbumAside key={myId()} datos={card} />
            ))}
            <h2 style={{ color: "black" }}>Rollos Favoritos</h2>
          </div>
        </aside>
        <main
          className="d-flex flex-wrap gap-3 justify-content-center"
          style={{
            marginBottom: "5px",
            marginTop: "5vh",
            width: "70%",
            //display: "flex",
            //Ugap: "5%",
            //flexWrap: "wrap",
          }}
        >
          {showError && (
            <div style={{width:'30vw',height:'20vh'}} className="d-block ms-auto me-auto">
            <ErrorToast
              msg={"El token ha expirado..."}
              isShowToast={showError}
              handleCloseToast={handleCloseError}
            />
            </div>
          )}
          {albumList.length===0&&<Spinner/>}
          {!showError&&albumList.map((card) => (
            <CardAlbumMain key={myId()} datos={card} />
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}
