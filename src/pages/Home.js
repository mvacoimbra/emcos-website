import React from 'react';
// css
import './Home.css';
// assets
// components
import Navbar from '../components/Navbar';
import Banner from '../components/sections/Banner';
import GreenBar from '../components/structure/GreenBar';
import About from '../components/sections/About';
import Workflow from '../components/sections/Workflow';
import Segments from '../components/sections/Segments';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <GreenBar />
      <About />
      <Workflow />
      <Segments />
    </div>
  );
};

export default Home;
