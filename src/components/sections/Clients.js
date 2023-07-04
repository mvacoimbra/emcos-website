import React from 'react';
// css
import './Clients.css';
// assets
// components
import Container from '../structure/Container';
import CltBox from '../structure/CltBox';

const Clients = () => {
  return (
    <Container className="clients__container">
      <h2 className="clients__title">
        <em className="greenUnderline">Nossos</em> cliente e parceiros
      </h2>
      <div className='clients__mural'>
        <CltBox publicId="emcos_website/clients_logos/client_logo_faberprint" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_equiplex" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_isoeste" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_ecovias" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_canoa" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_crown" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_brainfarma" height="60" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_fresenius" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_nacional" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_concebra" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_ambev" />
        <CltBox publicId="emcos_website/clients_logos/client_logo_porto" />
      </div>
    </Container>
  );
};

export default Clients;
