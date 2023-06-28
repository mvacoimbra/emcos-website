import React from 'react';
import { Link } from 'react-router-dom';
// css
import './Home.css';
// assets
// components
import Navbar from '../components/Navbar';
// import Container from '../components/Container';
import VideoBackground from '../components/VideoBackground';
import VideoPlayer from '../components/VideoPlayer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
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
            <Link to='/budget' className='banner__button'>Saiba mais</Link>
          </div>
        </VideoBackground>
      </div>
    </div>
  );
};

export default Home;
