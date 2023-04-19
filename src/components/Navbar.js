import React from 'react';
import './Navbar.css';
import { Navbar, Container, Button } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Filmoteca</Navbar.Brand>
        <Button variant="warning">Iniciar Sesión</Button>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
