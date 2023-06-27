import React from 'react';
// components
// assets
// css
import './Container.css';

const Container = (props) => {
  const classes = "container " + props.className

  return <div className={classes}>{props.children}</div>;
};

export default Container;
