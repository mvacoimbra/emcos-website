import React from 'react';
// css
import './Home.css';
// assets
// components
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import GreenBar from '../components/structure/GreenBar';
import About from '../components/About';

const Home = () => {

  return (
    <div>
      <Navbar />
      <Banner />
      <GreenBar />
      <About/>
      
    </div>
  );
};

export default Home;
