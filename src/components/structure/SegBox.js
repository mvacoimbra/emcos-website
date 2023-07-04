import React from 'react';
import { useState } from 'react';
// css
import './SegBox.css';
// assets
// components

const SegBox = (props) => {

  const faIcon = "segments__icon " + props.faIcon
  const title = props.title

  const [isCollapsed, setIsCollapsed] = useState(false);

  const segmentClickHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`segments__box ${
      isCollapsed ? '' : 'segments__box--collapsed'
    }`}>
      <div className="segments__boxheader">
        <div className="segments__icontitle">
          <i className={faIcon}></i>
          <h3 className="segments__title">{title}</h3>
        </div>
        <button
          className="segments__button fa-solid fa-chevron-down"
          onClick={segmentClickHandler}
        ></button>
      </div>
      <p className="segments__description">
        {props.children}
      </p>
    </div>
  );
};

export default SegBox;
