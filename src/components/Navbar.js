import React from 'react';
// css
import '../components/Navbar.css';
// assets
import logo from '../assets/logo_emcos.png';
// components
import Navigation from './Navigation';
import Container from './Container';

const Navbar = () => {
  return (
    <header>
      <Container className="container__navbar">
        <img src={logo} className="logo" />
        <Navigation></Navigation>
      </Container>
      <div></div>
      <div className="placeholder" />
    </header>
  );
};

export default Navbar;
