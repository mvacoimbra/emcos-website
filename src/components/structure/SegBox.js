import React from 'react';
import { useRef } from 'react';
// css
import './SegBox.css';

const SegBox = (props) => {
  const faIcon = 'segments__icon ' + props.faIcon;
  const title = props.title;

  const boxCard = useRef(null);

  const segmentClickHandler = () => {
    boxCard.current.classList.toggle('segments__box--active');
  };

  return (
    <div className="segments__box" ref={boxCard}>
      <div className="segments__boxheader">
        <i className={faIcon}></i>
        <h3 className="segments__title">{title}</h3>
        <button
          className="segments__button fa-solid fa-chevron-down"
          onClick={segmentClickHandler}
        ></button>
      </div>
      <div className="segments__description">
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default SegBox;
