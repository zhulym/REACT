// libraries
import React from 'react';
// styles
import './Images.css';

const Images = (props) => {
  return (
    <div className="app-content">
      <ul className="image__card-wrap">
        {props.imageData.map((item) => {
          return <li key={item.id} className="image__card">
            <img src={`https://farm66.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={item.owner} />
          </li>
        })}
      </ul>
    </div>
  );
};

export default Images;