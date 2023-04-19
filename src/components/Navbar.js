import React, { useState } from 'react';
import './Navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const AppNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>FILMOTECA</Navbar.Brand>
        {loggedIn ? (
          <Nav className="ms-auto">
            <Nav.Link href="#rollos">Rollos</Nav.Link>
            <Nav.Link href="#publicacion">Crear publicación</Nav.Link>
            <Nav.Link href="#perfil">Perfil</Nav.Link>
            <Nav.Link href="#about">Sobre nosotros</Nav.Link>
          </Nav>
        ) : (
          <Button variant="warning" onClick={handleLogin}>Iniciar Sesión</Button>
        )}
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
