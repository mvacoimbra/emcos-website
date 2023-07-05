import React from 'react';
// css
import './Footer.css';
// components
import Container from './structure/Container';
import { Link } from 'react-router-dom';
import CloudImage from './CloudImage';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about__container');
    const rect = element.getBoundingClientRect();

    const topPosition = rect.top + window.scrollY;
    // console.log(topPosition); // top position relative to the entire page
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <Container className="footer__container">
        <div className="footer__col--1">
          <CloudImage
            publicId="emcos_website/iycbdpcsao3frpn5jqtm"
            width="240"
            height=""
            alt="EMCOS Logo"
            className="footer__logo"
          />
          <div className="footer__icons">
            <p className="footer__title">Siga nossas redes:</p>
            <div className="footer__socials">
              <a
                className="footer__icon"
                href="https://www.instagram.com/emcosengenharia/"
                target="blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="footer__icon"
                href="https://www.facebook.com/Emcosengenharia/"
                target="blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="footer__icon"
                href="https://www.linkedin.com/company/emcos/"
                target="blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__col--2">
          <p className="footer__title">Mapa do site:</p>
          <ul className="footer__map">
            <li className="footer__map-item">
              <button onClick={scrollToTop} className="footer__button">
                Início
              </button>
            </li>
            <li className="footer__map-item">
              <button onClick={scrollToAbout} className="footer__button">
                Quem somos
              </button>
            </li>
            <li className="footer__map-item">
              <Link to="/portfolio" className="footer__link">
                Serviços
              </Link>
            </li>
            <li className="footer__map-item">
              <Link to="/contact" className="footer__link">
                Contato
              </Link>
            </li>
            <li className="footer__map-item">
              <Link to="/budget" className="footer__link footer__link--budget">
                Faça seu orçamento
              </Link>
            </li>
          </ul>
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
