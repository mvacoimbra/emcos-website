import React from 'react';
import { Link } from 'react-router-dom';
// css
import './About.css';
// assets
// components
import Container from '../structure/Container';
import MvvBox from '../structure/MvvBox';
import GearSVG from '../structure/GearSVG';

const About = () => {
  return (
    <Container className="about-mvv__wrapper" id="about__container">
      <div className="about__card">
        <div className="about__text">
          <h2 className="about__title">
            Sobre a <em className="greenUnderline">EMCOS</em>
          </h2>
          <p className="about__description">
            Nascida em dezembro de 2017, a EMCOS engenharia veio ao mundo com o
            objetivo de oferecer ao mercado um novo conceito de engenharia:
            <em className="greenColor"> mais jovem</em>,{' '}
            <em className="greenColor">inovador</em> e{' '}
            <em className="greenColor">leal</em>.
          </p>
          <p className="about__description">
            Buscamos construir em cada projeto, muito além de estruturas de
            concreto e aço. Levamos um modelo de atuação voltado para prestação
            de serviços com pacotes mensais de gerenciamento e administração de
            obras.
          </p>
        </div>
        <Link to="/contact" className="about__button">
          Conheça-nos melhor
        </Link>
      </div>
      <div className="mvv__card">
        <MvvBox title="Missão" faIcon="fa-solid fa-bullseye">
          Ser referência no meio da engenharia principalmente pela
          responsabilidade e ética, administrando obras com qualidade técnica,
          cumprindo os prazos estabelecidos com obediência às normas.
        </MvvBox>
        <MvvBox title="Visão" faIcon="fa-regular fa-eye">
          Atingir uma proporção de atuação nacional, com uma equipe flexível
          para atender os mais variados projetos e clientes na prestação de
          nossos serviços.
        </MvvBox>
        <MvvBox title="Valores" faIcon="fa-regular fa-heart">
          Transparência;
          <br />
          Segurança;
          <br />
          Inovação;
          <br />
          Sustentabilidade.
        </MvvBox>
      </div>
      <GearSVG width="400" height="216" fill="#E4E4E4" className="mvv__gear" />
    </Container>
  );
};

export default About;
