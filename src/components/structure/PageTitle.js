import React from 'react';
// css
import './PageTitle.css';
// components
import Container from './Container';
import GreenGearTitle from './GreenGearTitle';

const PageTitle = ({
  classTitle,
  classContainer,
  classAltTitle,
  title,
  altTitle,
}) => {
  return (
    <Container className={`page-title__container ${classContainer}`}>
      <GreenGearTitle title={title} className={classTitle} />
      <h3 className={`page-title__subtitle ${classAltTitle}`}>{altTitle}</h3>
    </Container>
  );
};

export default PageTitle;
