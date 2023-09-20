import React from 'react';
import { Link } from 'react-router-dom';
// css
import '../components/Navbar.css';
// components
import CloudImage from './CloudImage';
import Navigation from './Navigation';
import Container from './structure/Container';
import NavBurguer from './NavBurguer';

const Navbar = () => {
  return (
    <header>
      <Container className="navbar__container" id="navbar__container">
        <Link to="/">
          <CloudImage
            publicId="emcos_website/iycbdpcsao3frpn5jqtm"
            alt="EMCOS Logo"
            className="navbar__logo"
          />
        </Link>
        <Navigation />
        <NavBurguer />
      </Container>
      <div className="placeholder" />
    </header>
  );
};

export default Navbar;
