<<<<<<< HEAD
import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import RollosPopulares from "../components/RollosPopulares/RollosPopulares.js";
import ConvierteteExperto from "../components/ConvierteteExperto/ConvierteteExperto";
import ConoceMas from '../components/ConoceMas/ConoceMas';
import NuestrosUsuarios from "../components/NuestrosUsuarios/NuestrosUsuarios.js";
//import Login from "../components/SesionCrearCuenta/SesionCrearCuenta";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <ConvierteteExperto/>
      <ConoceMas/>
      <NuestrosUsuarios/>
      <RollosPopulares/>
    </div>
  );
=======
import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import RollosPopulares from '../components/RollosPopulares/RollosPopulares.js';
import ConvierteteExperto from '../components/ConvierteteExperto/ConvierteteExperto';
import ConoceMas from '../components/ConoceMas/ConoceMas';
import NuestrosUsuarios from '../components/NuestrosUsuarios/NuestrosUsuarios.js';
import ExpertoFoto from '../components/ExpertoFoto/ExpertoFoto.js';

const Home = () => {
	return (
		<div>
			<Navbar />
			<ConvierteteExperto />
			<ConoceMas />
			<NuestrosUsuarios />
			<RollosPopulares />
			<ExpertoFoto />
		</div>
	);
>>>>>>> 8c20470024278414326ddc714be9f323fe0ada35
};



export default Home;
