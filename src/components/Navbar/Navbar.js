import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import ModalCrearPublicacion from '../ModalCrearPublicacion/ModalCrearPublicacion.js';
import SeccionRollos from '../SeccionRollos/SeccionRollos';
import { useNavigate } from 'react-router';
import usePhoto from '../../hooks/usePhoto';
import { Link } from 'react-router-dom';

const AppNavbar = ({sectionAdmin}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCrearPublicacionModal, setShowCrearPublicacionModal] = useState(false);
  const [showSeccionRollo, setShowSeccionRollo] = useState(false);
  const navigate = useNavigate();
  const [dataPhotoUser,_,dataAdminUser]=usePhoto();

  useEffect(() => {
    
    if(dataPhotoUser.isLogged||dataAdminUser.isLogged){
      console.log('Usuario Logeado con exito:..');
      setLoggedIn(true);
    } 
    
  }, [dataPhotoUser.isLogged,dataAdminUser.isLogged])
  

  const handleLogin = () => {
    //setLoggedIn(true);
    navigate('/login');
  };

  const handleCrearPublicacionClick = () => {
    setShowCrearPublicacionModal(true);
  };
  const handleSeccionRolloClick = () => {
    setShowSeccionRollo(true);
  };

	const navLinks = (
		<Nav className="ms-auto">
			<Nav.Link href="#rollos">Rollos</Nav.Link>

			<Nav.Link href="#" onClick={handleCrearPublicacionClick}>
				Crear publicación
			</Nav.Link>
			<Link className="nav-link" to="/profile">
				Perfil
			</Link>
			<Nav.Link href="#about">Sobre nosotros</Nav.Link>
		</Nav>
	);

	

  const navAdminLinks = (
    <Nav className="ms-auto">
      <Link className='nav-link' to={'/loginAdminUser'}>Publicaciones</Link>
      <Link className='nav-link' to={'/crear-rollo'}>Rollos</Link>
      <Link className='nav-link' to={'/crear-camara'}>Camaras</Link>
      <Link className='nav-link' to={'/crear-scaner'}>Scaners</Link>
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
          <Link style={{textDecoration:'none'}} to={'/dashboard'}>
          <Navbar.Brand>FILMOTECA</Navbar.Brand>
          </Link>
          {loggedIn ? (sectionAdmin?navAdminLinks:navLinks) : loginButton}
        </Container>
      </Navbar>
      {/* <SeccionRollos show={showSeccionRollo} onHide={() => setShowSeccionRollo(false)} /> */}
      <ModalCrearPublicacion show={showCrearPublicacionModal} handleClose={() => setShowCrearPublicacionModal(false)} />
    </>
  );
};

export default AppNavbar;
