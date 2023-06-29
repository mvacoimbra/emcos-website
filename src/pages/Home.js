import React from 'react';
import { Link } from 'react-router-dom';
// css
import './Home.css';
// assets
// components
import Container from '../components/structure/Container';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import GreenBar from '../components/structure/GreenBar';

const Home = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      <GreenBar />
      <Container id="about-mvv__wrapper">
        <div className="about__card">
          <div className="about__text">
            <h2 className="about__title">
              Sobre a <em className="greenUnderline">EMCOS</em>
            </h2>
            <p className="about__description">
              Nascida em dezembro de 2017, a EMCOS engenharia veio ao mundo com
              o objetivo de oferecer ao mercado um novo conceito de engenharia:
              <em className="greenColor"> mais jovem</em>,{' '}
              <em className="greenColor">inovador</em> e{' '}
              <em className="greenColor">leal</em>.
            </p>
            <p className="about__description">
              Buscamos construir em cada projeto, muito além de estruturas de
              concreto e aço. Levamos um modelo de atuação voltado para
              prestação de serviços com pacotes mensais de gerenciamento e
              administração de obras.
            </p>
          </div>
          <Link to="/contact" className="about__button">
            Conheça-nos melhor
          </Link>
        </div>
        <div className="mvv__card">
          <div className="mvv__box">
            <div className="mvv__header">
              <h3 className="greenUnderline mvv__title">Missão</h3>
              <i className="fa-solid fa-bullseye mvv__icon" />
            </div>
            <p className="mvv__description">
              Ser referência no meio da engenharia principalmente pela
              responsabilidade e ética, administrando obras com qualidade
              técnica, cumprindo os prazos estabelecidos com obediência às
              normas.
            </p>
          </div>
          <div className="mvv__box">
            <div className="mvv__header">
              <h3 className="greenUnderline mvv__title">Visão</h3>
              <i className="fa-regular fa-eye mvv__icon" />
            </div>
            <p className="mvv__description">
              Ser referência no meio da engenharia principalmente pela
              responsabilidade e ética, administrando obras com qualidade
              técnica, cumprindo os prazos estabelecidos com obediência às
              normas.
            </p>
          </div>
          <div className="mvv__box">
            <div className="mvv__header">
              <h3 className="greenUnderline mvv__title">Valores</h3>
              <i className="fa-regular fa-heart mvv__icon" />
            </div>
            <p className="mvv__description">
              Ser referência no meio da engenharia principalmente pela
              responsabilidade e ética, administrando obras com qualidade
              técnica, cumprindo os prazos estabelecidos com obediência às
              normas.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
