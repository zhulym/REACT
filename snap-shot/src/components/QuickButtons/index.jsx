// libraries
import React, { useState, useEffect } from 'react';
// static
// styles
import './QuickButtons.css';

const QuickButtons = (props) => {

  const handleClick = (event) => {
    props.onClickCallBack(event.target.innerHTML)
  }

  return (
    <div className="search__default-links">
      <ul className="search__default-container">
        <li><a href="#" onClick={handleClick}>Ferrari</a></li>
        <li><a href="#" onClick={handleClick}>Lamborghini</a></li>
        <li><a href="#" onClick={handleClick}>Mercedes</a></li>
        <li><a href="#" onClick={handleClick}>Maserati</a></li>
      </ul>
    </div>
  );
};

export default QuickButtons;