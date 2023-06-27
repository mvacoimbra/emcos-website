import React from 'react';
import { Link } from 'react-router-dom';
// components
// assets
// css
import './Navigation.css';

const Navigation = () => {

  return (
    <nav className="nav">
      <ul className="navlist">
        <li>
          <Link to="/" className="navlist__link">
            Quem Somos
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="navlist__link">
            Portfólio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navlist__link">
            Contato
          </Link>
        </li>
        <li>
          <Link to="/budget" className="navlist__link navlist__btn">
            Faça seu orçamento
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
