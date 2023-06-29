import React from 'react';
// css
import './MvvBox.css';
// assets
// components

const MvvBox = (props) => {
  const title = props.title;
  const faIcon = props.faIcon + ' mvv__icon';

  const myList = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="mvv__box">
      <div className="mvv__header">
        <h3 className="greenUnderline mvv__title">{title}</h3>
        <i className={faIcon} />
      </div>
      <p className="mvv__description">{props.children}</p>
    </div>
  );
};

export default MvvBox;
