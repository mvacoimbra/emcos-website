import React from 'react';

const UnorderedList = (props) => {
  const classes = props.className;

  return (
    <ul className={classes}>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default UnorderedList;
