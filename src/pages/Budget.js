import React from 'react';
// css
import './Budget.css';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/structure/PageTitle';
import Container from '../components/structure/Container';
import BudgetForm from '../components/BudgetForm';
import CloudImage from '../components/CloudImage';

const Budget = () => {
  return (
    <div>
      <Navbar />
      <PageTitle
        title="Solicite um orçamento"
        altTitle="Receba seu orçamento personalizado no e-mail"
        classContainer="budget-title__container"
        classAltTitle="budget__alt-title"
      />
      <Container className="budget__container">
        <BudgetForm />
        <div className="budget__backcard">
          <CloudImage
            publicId="emcos_website/ENGRENAGEM_zenzig"
            alt="gear"
            className="budget__backgear"
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Budget;
