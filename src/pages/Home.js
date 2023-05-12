// Home.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import RollosPopulares from '../components/RollosPopulares/RollosPopulares.js';
import ConvierteteExperto from '../components/ConvierteteExperto/ConvierteteExperto';
import ConoceMas from '../components/ConoceMas/ConoceMas';
import NuestrosUsuarios from '../components/NuestrosUsuarios/NuestrosUsuarios.js';
import ExpertoFoto from '../components/ExpertoFoto/ExpertoFoto.js';

const Home = () => {
  const [showLanding, setShowLanding] = useState(false);

  return (
    <div>
      <Navbar setShowLanding={setShowLanding} />
      {showLanding ? null : (
        <>
          <ConvierteteExperto />
          <ConoceMas />
          <NuestrosUsuarios />
          <RollosPopulares />
          <ExpertoFoto />
        </>
      )}
    </div>
  );
};

export default Home;

