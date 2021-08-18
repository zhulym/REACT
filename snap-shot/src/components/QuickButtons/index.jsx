// libraries
import React from 'react';
// styles
import './QuickButtons.css';

const carButtons = [
  { name: "Ferrari", value: 'ferrari' },
  { name: "Lamborghini", value: 'lamborghini' },
  { name: "Mercedes", value: 'mercedes' },
  { name: "Maserati", value: 'maserati' },
]
const QuickButtons = (props) => {

  const handleClick = (value) => {
    props.onClickCallBack(value);
    props.setIsClickQuickButtonCallBack(!props.isClickQuickButton)
  }
  console.log('render', carButtons)
  return (
    <div className="search__default-links">
      <ul className="search__default-container">
        {carButtons.map(car => {
          return <li key={car.name} onClick={() => handleClick(car.value)}>{car.name}</li>
        })}
      </ul>
    </div>
  );
};

export default QuickButtons;
