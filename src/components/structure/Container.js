import React from 'react';
// css
import './Container.css';

const Container = (props) => {
  const classes = 'container ' + props.className;
  const id = props.id;

  return (
    <div className={classes} id={id}>
      {props.children}
    </div>
  );
};

export default Container;
