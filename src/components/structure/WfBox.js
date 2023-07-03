import React from 'react';
// css
import './WfBox.css';
// assets
// components

const WfBox = (props) => {

  const faIcon = "workflow__icon " + props.faIcon
  const title = props.title
  const step = props.step

  return (
    <div className="workflow__box">
      <div className="workflow__header">
        <div className="workflow__head">
          <i className={faIcon} />
          <h4 className="workflow__title">{title}.</h4>
        </div>
        <h5 className="workflow__step">{step}</h5>
      </div>
      <p className="workflow__description">{props.children}</p>
    </div>
  );
};

export default WfBox;
