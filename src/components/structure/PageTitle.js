import React from 'react';
// css
import './PageTitle.css';
// components
import Container from './Container';
import GreenGearTitle from './GreenGearTitle';

const PageTitle = ({ className, title, altTitle }) => {
  return (
    <Container className="page-title__container">
      <GreenGearTitle title={title} className={className} />
      <h3 className="page-title__subtitle">{altTitle}</h3>
    </Container>
  );
};

export default PageTitle;
