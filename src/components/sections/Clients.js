import React from 'react';
// css
import './Clients.css';
// assets
// components
import Container from '../structure/Container';
import CloudImage from '../CloudImage';

const Clients = () => {
  const clients = [
    {
      logo: 'emcos_website/clients_logos/client_logo_faberprint',
      link: true,
      href: 'https://faberprint.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_equiplex',
      link: true,
      href: 'https://www.equiplex.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_isoeste',
      link: true,
      href: 'https://www.isoestemetalica.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_ecovias',
      link: true,
      href: 'https://www.ecorodovias.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_canoa',
      link: true,
      href: 'https://fazendacanoa.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_crown',
      link: true,
      href: 'https://www.linkedin.com/company/crown-embalagens-metalicas-da-amazonia-s-a/',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_brainfarma',
      link: true,
      href: 'https://www.brainfarma.ind.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_fresenius',
      link: true,
      href: 'https://www.fresenius-kabi.com/br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_nacional',
      link: true,
      href: 'https://nacionalgas.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_concebra',
      link: true,
      href: 'https://www.triunfoconcebra.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_ambev',
      link: true,
      href: 'http://www.gruporegra.com.br',
    },
    {
      logo: 'emcos_website/clients_logos/client_logo_porto',
      link: true,
      href: 'https://portal.portoseco.com.br',
    },
  ];

  const ClientLink = ({ logo, link, href }) => {
    return (
      <div>
        {link === true ? (
          <a href={href} target="blank">
            <CloudImage publicId={logo} />
          </a>
        ) : (
          <CloudImage publicId={logo} />
        )}
      </div>
    );
  };

  return (
    <Container id="clients__container">
      <h2 className="clients__title">
        <em className="greenUnderline">Nossos</em> clientes e parceiros
      </h2>
      <ul className="clients__mural">
        {clients.map((item, index) => {
          return (
            <li className="clients__box" key={index}>
              <ClientLink logo={item.logo} link={item.link} href={item.href} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Clients;
