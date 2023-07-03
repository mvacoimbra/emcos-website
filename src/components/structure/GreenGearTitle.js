import React from 'react';
// css
import './GreenGearTitle.css';
// assets
// components
import GreenGradGearSVG from './GreenGradGearSVG';

const GreenGearTitle = (props) => {
  return (
    <div className="gearTitle__container">
      <GreenGradGearSVG width="113" height="61" className="gearTitle__gear" />
      <h2 className="gearTitle__title">
        {props.title}<em className='greenColor'>.</em>
      </h2>
    </div>
  );
};

export default GreenGearTitle;
