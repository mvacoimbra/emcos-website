import React from 'react';
// css
import './InputList.css';
// components

const InputList = ({ list, className }) => {
  const inputs = list;

  return (
    <ul className={`form__input-list ${className}`}>
      {inputs.map((input, index) => {
        if (input.type !== 'tel') {
          return (
            <li className="form__input" key={index}>
              <label>{input.label}</label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                required
              />
            </li>
          );
        } else {
          return (
            <li className="form__input" key={index}>
              <label>{input.label}</label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                required
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default InputList;
