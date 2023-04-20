import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import LandingPart1 from '../components/LandingPart1/LandingPart1';
import LandingPart2 from '../components/LandingPart2/LandingPart2';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingPart1/>
      <LandingPart2/>
    </div>
  );
}

export default Home;
