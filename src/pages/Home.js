// Home.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import RollosPopulares from "../components/RollosPopulares/RollosPopulares.js";
import ConvierteteExperto from "../components/ConvierteteExperto/ConvierteteExperto";
import ConoceMas from "../components/ConoceMas/ConoceMas";
import NuestrosUsuarios from "../components/NuestrosUsuarios/NuestrosUsuarios.js";
import ExpertoFoto from "../components/ExpertoFoto/ExpertoFoto.js";
import Footer from "../components/Footer/Footer.js";
import { useNavigate } from "react-router";
import usePhoto from "../hooks/usePhoto.js";

const Home = () => {
  const navigate = useNavigate();
  const [
    dataPhotoUser,
    setDataPhotoUser,
    dataAdminUser,
    setDataAdminUser,
	initDataPhotoUser,
	initDataAdminUser,
    router,
    setRouter,
    routerPublic,
    routerPhotoUser,
    routerAdminUser,
  ] = usePhoto();
  useEffect(() => {
    if(dataAdminUser.isLogged&&dataPhotoUser.isLogged){
      console.log('Ambos usuarios logeados:..')
      return
    }
    if (dataAdminUser.isLogged&&(router===routerAdminUser)) {
      navigate("/adminHome");
    }
    if (dataPhotoUser.isLogged&&(router===routerPhotoUser)) {
      navigate("/dashboard");
    }
  }, [dataAdminUser.isLogged, dataPhotoUser.isLogged, router]);
  return (
    <div>
      <Navbar />
      <ConvierteteExperto />
      <ConoceMas />
      <NuestrosUsuarios />
      <RollosPopulares />
      <ExpertoFoto />
      <Footer />
    </div>
  );
};

export default Home;
