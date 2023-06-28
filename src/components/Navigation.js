import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// components
// assets
// css
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="navlist">
        <li>
          <Link to="/" className={`navlist__link ${location.pathname === '/' ? 'navlist__link--active' : ''}`}>
            Quem Somos
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={`navlist__link ${location.pathname === '/portfolio' ? 'navlist__link--active' : ''}`}>
            Portfólio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`navlist__link ${location.pathname === '/contact' ? 'navlist__link--active' : ''}`}>
            Contato
          </Link>
        </li>
        <li>
          <Link to="/budget" className={`navlist__link navlist__btn ${location.pathname === '/budget' ? 'navlist__link--active' : ''}`}>
            Faça seu orçamento
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
