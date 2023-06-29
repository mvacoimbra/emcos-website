import React from 'react';
import { Link } from 'react-router-dom';
// css
import './Banner.css';
// assets
// components
import VideoBackground from './VideoBackground';

const Banner = () => {
  return (
    <VideoBackground className="banner__wrapper">
          <div>
            <div className="banner__text">
              <h1 className="banner__title">Obras</h1>
              <p className="banner__description">
                Experiência em atender as necessidades de clientes de diversos
                setores da construção civil, como áreas habitacionais,
                comerciais e industriais.
              </p>
            </div>
            <Link to="/portfolio" className="banner__button">
              Saiba mais
            </Link>
          </div>
        </VideoBackground>
  );
};

export default Banner;
