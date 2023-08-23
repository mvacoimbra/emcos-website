import React from 'react';
// css
import './GreenGearTitle.css';
// assets
// components
import GreenGradGearSVG from './GreenGradGearSVG';
import CloudImage from '../CloudImage';

const GreenGearTitle = (props) => {
  return (
    <div className="gearTitle__container">
      <CloudImage
        publicId="emcos_website/gear_green"
        className="gearTitle__gear"
      />
      <h2 className="gearTitle__title">
        {props.title}
        <em className="greenColor">.</em>
      </h2>
    </div>
  );
};

export default GreenGearTitle;
