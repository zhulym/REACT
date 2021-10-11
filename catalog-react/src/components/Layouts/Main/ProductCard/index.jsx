//libraries
import React from 'react';
//components
//styles
import './ProductCard.scss';

const ProductCard = ({ key, img, description, title, price }) => {
  const formatPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price / 100);


  return (
    <div className="product-card__container">
      <div className="product-card__title">{title}</div>
      <div className="product-card__image">
        <img className="card__image" src={img} alt={key} />
      </div>
      <div className="product-card__description">{description}</div>
      <div className="product-card__price">{formatPrice}</div>
    </div>
  );
}

export default ProductCard;