import React from 'react';
// css
import '../components/Navbar.css';
// assets
import CloudImage from './CloudImage';
// components
import Navigation from './Navigation';
import Container from './structure/Container';


const Navbar = () => {
  return (
    <header>
      <Container className="navbar__container" id="navbar__container">
        <CloudImage publicId="emcos_website/iycbdpcsao3frpn5jqtm" width="200" height="" alt="EMCOS Logo" className="navbar__logo"/>
        <Navigation></Navigation>
      </Container>
      <div></div>
      <div className="placeholder" />
    </header>
  );
};

export default Navbar;
