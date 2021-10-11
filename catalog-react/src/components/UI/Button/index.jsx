//libraries
import React from 'react';
//styles
import './Button.scss';

const Button = ({innerText}) => {

  return (
    <button className="product__button">{innerText}</button>
  );
}

export default Button;