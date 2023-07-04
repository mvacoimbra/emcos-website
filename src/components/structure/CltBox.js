import React from 'react';
// css
import './CltBox.css';
// assets
// components
import CloudImage from '../CloudImage'

const CltBox = (props) => {

  const publicId = props.publicId;
  const height = props.height;


  return (
    <div className='clients__box'>
      <div className="clients__logo" style={{height: height + 'px'}}>
        <CloudImage publicId={publicId} width="" height={height} alt="Client logo"/>
      </div>
    </div>
  );
};

export default CltBox;
