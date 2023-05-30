import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ModalCrearPublicacion from "../ModalCrearPublicacion/ModalCrearPublicacion.js";
import { useNavigate } from "react-router";
import usePhoto from "../../hooks/usePhoto";
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";

const AppNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [onLogOut, setOnLogOut] = useState(false);
  const [showCrearPublicacionModal, setShowCrearPublicacionModal] =
    useState(false);
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
    publicRouter,
    routerPhotoUser,
    routerAdminUser,
  ] = usePhoto();
  const [isSectionAdmin, setIsSectionAdmin] = useState(false);

  useEffect(() => {
    //console.log("sectionAdmin:..", isSectionAdmin);
  }, []);

  useEffect(() => {
    if (dataAdminUser.isLogged) {
      console.log("Usuario Admin logeado con exito:..");
      setRouter(routerAdminUser);
      setIsSectionAdmin(true);
      setLoggedIn(true);
      //navigate('/adminHome');
    }
    if (dataPhotoUser.isLogged) {
      console.log("Usuario PhotoUser logeado con exito:..");
      setRouter(routerPhotoUser);
      setIsSectionAdmin(false);
      setLoggedIn(true);
    }
  }, [dataPhotoUser.isLogged, dataAdminUser.isLogged]);

  useEffect(() => {
    if (onLogOut) {
      console.log('Iniciando Logout:..')
      if (router !== publicRouter) setRouter(publicRouter);
      if (dataPhotoUser !== initDataPhotoUser)
        setDataPhotoUser(initDataPhotoUser);
      if (dataAdminUser !== initDataAdminUser)
        setDataAdminUser(initDataAdminUser);

      
      if (
        router === publicRouter &&
        dataPhotoUser === initDataPhotoUser &&
        dataAdminUser === initDataAdminUser
      ) {
        console.log("Logout succes:..");
        onLogOut(false);
      }
    }
  }, [router, dataPhotoUser, dataAdminUser,onLogOut]);

  const handleLogin = () => {
    //setLoggedIn(true);
    navigate("/login");
  };

  const handleCrearPublicacionClick = () => {
    setShowCrearPublicacionModal(true);
  };

  const handleLogout = () => {
    console.log('..onLogOut = true..');
    setOnLogOut(true);
    setRouter(publicRouter);
    setDataPhotoUser(initDataPhotoUser);
    setDataAdminUser(initDataAdminUser);
    window.localStorage.setItem("tokenUser", "");
    navigate('/');
    window.location.reload();
  };

  const navLinks = (
    <Nav className="ms-auto">
      <Link
        style={{ textDecoration: "none" }}
        to={"/dashboard"}
        className="nav-link"
      >
        {" "}
        Dashboard
      </Link>
      <Link className="nav-link" to="/rollos">
        Rollos
      </Link>

      <Nav.Link href="#" onClick={handleCrearPublicacionClick}>
        Crear publicación
      </Nav.Link>
      <Link className="nav-link" to="/profile">
        Perfil
      </Link>
      <Nav.Link href="#about">Sobre nosotros</Nav.Link>
      <Link to={"/"} onClick={handleLogout} className="btn btn-secondary">
        <GrLogout />
      </Link>
    </Nav>
  );

  const navAdminLinks = (
    <Nav className="ms-auto">
      <Link className="nav-link" to={"/adminHome"}>
        Publicaciones
      </Link>
      <Link className="nav-link" to={"/crear-rollo"}>
        Rollos
      </Link>
      <Link className="nav-link" to={"/crear-camara"}>
        Camaras
      </Link>
      <Link className="nav-link" to={"/crear-scaner"}>
        Scaners
      </Link>
      <Link to={"/"} onClick={handleLogout} className="btn btn-secondary">
        <GrLogout />
      </Link>
    </Nav>
  );
  const loginButton = (
    <Button variant="warning" onClick={handleLogin}>
      Iniciar Sesión
    </Button>
  );

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Navbar.Brand>FILMOTECA</Navbar.Brand>
          </Link>
          {loggedIn && isSectionAdmin && navAdminLinks}
          {loggedIn && !isSectionAdmin && navLinks}
          {!loggedIn && loginButton}
        </Container>
      </Navbar>
      <ModalCrearPublicacion
        show={showCrearPublicacionModal}
        handleClose={() => setShowCrearPublicacionModal(false)}
      />
    </>
  );
};

export default AppNavbar;
