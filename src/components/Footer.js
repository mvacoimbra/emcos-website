import React from 'react';
// css
import './Footer.css';
// components
import Container from './structure/Container';
import { Link } from 'react-router-dom';
import CloudImage from './CloudImage';

const Footer = () => {
  const FooterSocials = () => {
    const links = [
      {
        faIcon: 'fa-instagram',
        href: 'https://www.instagram.com/emcosengenharia/',
      },
      {
        faIcon: 'fa-facebook',
        href: 'https://www.facebook.com/Emcosengenharia/',
      },
      {
        faIcon: 'fa-linkedin',
        href: 'https://www.linkedin.com/company/emcos/',
      },
    ];
    return (
      <ul className="footer__socials">
        {links.map((item, index) => {
          return (
            <li className="footer__icon" key={index}>
              <a href={item.href} target="blank">
                <i className={`fa-brands ${item.faIcon}`} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  const FooterMap = () => {
    const links = [
      {
        name: 'Quem somos',
        to: '/',
      },
      {
        name: 'Serviços',
        to: '/portfolio',
      },
      {
        name: 'Contato',
        to: '/contact',
      },
      {
        name: 'Faça seu orçamento',
        to: '/budget',
      },
    ];

    const scrollToTop = () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
      <ul className="footer__map">
        <li className="footer__map-item">
          <button
            className="footer__button"
            onClick={() => {
              scrollToTop();
            }}
          >
            Início
          </button>
        </li>
        {links.map((item, index) => {
          return (
            <li className="footer__map-item" key={index}>
              <Link to={item.to} className="footer__link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  // main component
  return (
    <footer>
      <Container id="footer__container">
        <div className="footer__col--1">
          <CloudImage
            publicId="emcos_website/iycbdpcsao3frpn5jqtm"
            width="240"
            alt="EMCOS Logo"
            className="footer__logo"
          />
          <div className="footer__icons">
            <p className="footer__title">Siga nossas redes:</p>
            <FooterSocials />
          </div>
        </div>
        <div className="footer__col--2 footer__map-wrapper">
          <p className="footer__title">Mapa do site:</p>
          <FooterMap />
        </div>
        <div className="footer__col--2">
          <p className="footer__title">Fale conosco:</p>
          <ul className="footer__contact-info">
            <li className="footer__contact-item">
              <a
                className="footer__contact-link"
                href="https://wa.me/5562996302698?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre..."
                target="blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
                {'(62) 9 9630-2698'}
              </a>
              <p>/</p>
              <i className="fa-solid fa-phone"></i>
              <p>{'(62) 3976-4774'}</p>
            </li>
            <li className="footer__contact-item">
              <a
                className="footer__contact-link"
                href="mailto:contato@emcos.com.br"
                target="blank"
              >
                <i className="fa-regular fa-envelope"></i>
                contato@emcos.com.br
              </a>
            </li>
            <li className="footer__contact-item">
              <a
                className="footer__contact-link"
                href="https://goo.gl/maps/JV3xnz3d9Txo5wFR7"
                target="blank"
              >
                <i className="fa-solid fa-location-dot"></i>
                Avenida Brasil, Q39 L17, Bairro de Lourdes, 75095-795, Anápolis
                - GO.
              </a>
            </li>
            <li className="footer__contact-item">
              <i className="fa-regular fa-clock"></i>
              <p>Segunda à sexta 7h às 17h.</p>
            </li>
          </ul>
        </div>
        <CloudImage
          publicId="emcos_website/graygear"
          width="115"
          height="62"
          alt=""
          className="footer__gear"
        />
      </Container>

      <Container id="footer__container--2">
        <p className="footer__rights">
          © 2023 EMCOS ENGENHARIA E CONSULTORIA - TODOS OS DIREITOS RESERVADOS
        </p>
        <Link className="footer__terms" to="/terms">
          <p>TERMOS DE USO | POLÍTICA DE PRIVACIDADE</p>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
