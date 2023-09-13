import React, { useState } from 'react';
// css
import './Portfolio.css';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/structure/PageTitle';
import Container from '../components/structure/Container';
import CloudImage from '../components/CloudImage';
import GalleryWindow from '../components/structure/GalleryWindow';

const Portfolio = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentFolder, setCurrentFolder] = useState('');

  const updateWindowStatus = (status) => {
    setIsActive(status);
  };

  // NESTED COMPONENT
  const GalleryItem = ({ projectFolder, title }) => {
    const clickHandler = () => {
      setCurrentFolder(projectFolder);
      setIsActive(true);
    };

    return (
      <li className="gallery__item" onClick={clickHandler}>
        <CloudImage
          publicId={`emcos_website/portfolio/${projectFolder}/image_5`}
          className={'item__image'}
        />
        <h2 className="item__title">{title}</h2>
      </li>
    );
  };

  // GALLERY ITEMS
  const gallery = [
    {
      projectFolder: 'fazenda_canoa',
      title: 'Infraestrutura Fazenda CANOA | Alêxania - GO',
    },
    {
      projectFolder: 'anapolis_city',
      title: 'Casa de alto padrão | Anápolis - GO',
    },
    {
      projectFolder: 'anapolis_city',
      title: 'Casa de alto padrão | Anápolis - GO',
    },
    {
      projectFolder: 'anapolis_city',
      title: 'Casa de alto padrão | Anápolis - GO',
    },
  ];

  // MAIN COMPONENT
  return (
    <div>
      <GalleryWindow
        active={isActive}
        updateWindowStatus={updateWindowStatus}
        currentFolder={currentFolder}
      />
      <Navbar />
      <PageTitle
        title="Portfólio"
        altTitle="Conheça alguns dos projetos realizados por nós:"
      />
      <Container>
        <ul className="portfolio__gallery">
          {gallery.map((item, index) => {
            return (
              <GalleryItem
                projectFolder={item.projectFolder}
                title={item.title}
                key={index}
              />
            );
          })}
        </ul>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
