
import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import RollosPopulares from '../components/RollosPopulares/RollosPopulares.js';
import ConvierteteExperto from '../components/ConvierteteExperto/ConvierteteExperto';
import ConoceMas from '../components/ConoceMas/ConoceMas';
import NuestrosUsuarios from '../components/NuestrosUsuarios/NuestrosUsuarios.js';
import ExpertoFoto from '../components/ExpertoFoto/ExpertoFoto.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {
	return (
		<div>
			<Navbar />
			<ConvierteteExperto />
			<ConoceMas />
			<NuestrosUsuarios />
			<RollosPopulares />
			<ExpertoFoto />
			<Footer/>
		</div>
	);
};



export default Home;
