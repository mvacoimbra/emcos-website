import React from 'react';
// css
import './Contact.css';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/structure/Container';
import PageTitle from '../components/structure/PageTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const InfoSocials = () => {
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
      <ul className="contact__socials">
        {links.map((item, index) => {
          return (
            <li className="contact__icon" key={index}>
              <a href={item.href} target="blank">
                <i className={`fa-brands ${item.faIcon}`} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <Navbar />
      <PageTitle
        title="Nosso Contato"
        altTitle="Respostas em média de até 24hrs."
      />
      <Container className="contact__container">
        <section className="contact__info">
          <h2 className="contact__info-title">
            Fale conosco para mais informações ou dúvidas.
          </h2>
          <div className="contact__phones">
            <a
              className="contact__whatsapp"
              href="https://wa.me/5562996302698?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre..."
              target="blank"
            >
              <i className="fa-brands fa-whatsapp" />
              {`(62) 9 9630-2698`}
            </a>
            <span>/</span>
            <div>
              <i className="fa-solid fa-phone" />
              <span>{`(62) 3976-4774`}</span>
            </div>
          </div>
          <a
            className="contact__mail"
            href="mailto:contato@emcos.com.br"
            target="blank"
          >
            <i className="fa-regular fa-envelope" />
            contato@emcos.com.br
          </a>
          <a href="https://goo.gl/maps/JV3xnz3d9Txo5wFR7" target="blank">
            <i className="fa-solid fa-location-dot" />
            {`Avenida Brasil, Q39 L17, Bairro de Lourdes, 75095-795, Anápolis - GO.`}
          </a>
          <InfoSocials />
        </section>
        <section className="contact__form">
          <ContactForm />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
