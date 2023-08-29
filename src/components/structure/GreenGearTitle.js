import React from 'react';
// css
import './GreenGearTitle.css';
// components
import CloudImage from '../CloudImage';

const GreenGearTitle = ({ title, className }) => {
  return (
    <div className={`gearTitle__container ${className}`}>
      <CloudImage
        publicId="emcos_website/gear_green"
        className="gearTitle__gear"
      />
      <h2 className="gearTitle__title">
        {title}
        <em className="greenColor">.</em>
      </h2>
    </div>
  );
};

export default GreenGearTitle;
