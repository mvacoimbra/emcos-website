import React from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// css
import './NavBurguer.css';

const NavBurguer = () => {
  const location = useLocation();

  const [menuState, setMenuState] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuState);
  };

  const NavLinks = ({ active }) => {
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
        name: 'Orçamento',
      },
    ];

    return (
      <ul className="navburguer__list">
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`navburguer__link ${
                  location.pathname === item.path
                    ? 'navburguer__link--active'
                    : ''
                } ${item.path === '/budget' ? 'navburguer__btn' : ''}`}
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
    <nav className="navburguer__container">
      <div
        className={`navburguer__menu ${
          menuState === false ? '' : 'navburguer__menu--active'
        }`}
      >
        <button className="menu__btn" onClick={handleMenuClick}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <NavLinks active={menuState} />
      </div>
    </nav>
  );
};

export default NavBurguer;
