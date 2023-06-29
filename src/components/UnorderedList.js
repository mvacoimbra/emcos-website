import React from 'react';
// css
// import './UnorderedList.css';
// assets
// components

const UnorderedList = (props) => {
  
  const classes = props.className

  return (
    <ul className={classes}>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default UnorderedList;
