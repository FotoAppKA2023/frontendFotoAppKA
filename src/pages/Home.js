import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import RollosPopulares from "../components/RollosPopulares/RollosPopulares.js";
import LandingPart1 from "../components/LandingPart1/LandingPart1";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPart1 />
      <RollosPopulares />
    </div>
  );
};

export default Home;
