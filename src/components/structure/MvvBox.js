import React from 'react';
// css
import './MvvBox.css';

const MvvBox = ({ faIcon, title, children }) => {
  return (
    <div className="mvv__box">
      <div className="mvv__header">
        <h3 className="greenUnderline mvv__title">{title}</h3>
        <i className={`mvv__icon ${faIcon}`} />
      </div>
      <p className="mvv__description">{children}</p>
    </div>
  );
};

export default MvvBox;
