import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PerfilUsuario from "../components/PerfilUsuario/PerfilUsuario";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <PerfilUsuario />
      <Footer />
    </>
  );
};

export default UserProfile;
