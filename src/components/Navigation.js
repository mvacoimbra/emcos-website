import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// components
// assets
// css
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const NavLinks = () => {
    const links = [
      {
        path: '/',
        name: 'Quem Somos',
      },
      {
        path: '/contact',
        name: 'Contato',
      },
      {
        path: '/portfolio',
        name: 'Portfólio',
      },
      {
        path: '/budget',
        name: 'Faça seu Orçamento',
      },
    ];

    return (
      <ul className="navlist">
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`navlist__link ${
                  location.pathname === item.path ? 'navlist__link--active' : ''
                } ${item.path === '/budget' ? 'navlist__btn' : ''}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="nav">
      <NavLinks />
    </nav>
  );
};

export default Navigation;
