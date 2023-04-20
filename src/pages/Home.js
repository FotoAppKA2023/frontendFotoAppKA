import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import RollosPopulares from "../components/RollosPopulares/RollosPopulares.js";
import LandingPart1 from "../components/LandingPart1/LandingPart1";
import LandingPart2 from '../components/LandingPart2/LandingPart2';
import NuestrosUsuarios from "../components/NuestrosUsuarios/NuestrosUsuarios.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPart1 />
      <LandingPart2/>
      <NuestrosUsuarios/>
      <RollosPopulares />
      
    </div>
  );
};

export default Home;
