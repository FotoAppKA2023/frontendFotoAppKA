import React, { useState } from 'react';
import './Navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import ModalCrearPublicacion from '../ModalCrearPublicacion/ModalCrearPublicacion';
import { useNavigate } from 'react-router';

const AppNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCrearPublicacionModal, setShowCrearPublicacionModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/login');
  };

  const handleCrearPublicacionClick = () => {
    setShowCrearPublicacionModal(true);
  };

  const navLinks = (
    <Nav className="ms-auto">
      <Nav.Link href="#rollos">Rollos</Nav.Link>
      
      <Nav.Link href="crear-rollo/" onClick={handleCrearPublicacionClick}>
        Crear publicación
      </Nav.Link>
      <Nav.Link href="#perfil">Perfil</Nav.Link>
      <Nav.Link href="#about">Sobre nosotros</Nav.Link>
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
          <Navbar.Brand>FILMOTECA</Navbar.Brand>
          {loggedIn ? navLinks : loginButton}
        </Container>
      </Navbar>
      <ModalCrearPublicacion show={showCrearPublicacionModal} onHide={() => setShowCrearPublicacionModal(false)} />
    </>
  );
};

export default AppNavbar;
