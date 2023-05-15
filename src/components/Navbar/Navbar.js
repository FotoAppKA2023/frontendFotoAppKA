import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import ModalCrearPublicacion from '../ModalCrearPublicacion/ModalCrearPublicacion.js';
import { useNavigate } from 'react-router';
import usePhoto from '../../hooks/usePhoto';
import { Link } from 'react-router-dom';
import {GrLogout} from 'react-icons/gr';

const AppNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCrearPublicacionModal, setShowCrearPublicacionModal] = useState(false);
  const navigate = useNavigate();
  const [dataPhotoUser,setDataPhotoUser,dataAdminUser,setDataAdminUser,initDataPhotoUser,initDataAdminUser]=usePhoto();
  const [isSectionAdmin, setIsSectionAdmin] = useState(false);

  useEffect(()=>{
    console.log('sectionAdmin:..',isSectionAdmin)
  },[])

  useEffect(() => {
    if(dataAdminUser.isLogged){
      console.log('Usuario Admin logeado con exito:..',isSectionAdmin);
      setIsSectionAdmin(true);
      setLoggedIn(true);
      //navigate('/adminHome');
    } 
    if(dataPhotoUser.isLogged){
      console.log('Usuario PhotoUser logeado con exito:..',isSectionAdmin);
      setIsSectionAdmin(false);
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

  const handleLogout= ()=>{
    setDataPhotoUser(initDataPhotoUser);
    setDataAdminUser(initDataAdminUser);
  }


	const navLinks = (
		<Nav className="ms-auto">
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
      <Link to={'/'} onClick={handleLogout} className='btn btn-secondary'><GrLogout/></Link>
		</Nav>
	);

	

  const navAdminLinks = (
    <Nav className="ms-auto">
      <Link className='nav-link' to={'/adminHome'}>Publicaciones</Link>
      <Link className='nav-link' to={'/crear-rollo'}>Rollos</Link>
      <Link className='nav-link' to={'/crear-camara'}>Camaras</Link>
      <Link className='nav-link' to={'/crear-scaner'}>Scaners</Link>
      <Link to={'/'} onClick={handleLogout} className='btn btn-secondary'><GrLogout/></Link>
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
          {loggedIn&&isSectionAdmin&&navAdminLinks}
          {loggedIn&&!isSectionAdmin&&navLinks}
          {!loggedIn&&loginButton}
          
        </Container>
      </Navbar>
      <ModalCrearPublicacion show={showCrearPublicacionModal} handleClose={() => setShowCrearPublicacionModal(false)} />
    </>
  );
};

export default AppNavbar;
