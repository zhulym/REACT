//libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styles
import './ProductCard.scss';

const ProductCard = ({ item, id, img, description, title, price, addProductToCartCallBack }) => {
  const formatPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price / 100);
  const cartData = useSelector(({ cart }) => cart);
  const isProductAdded = cartData.order.find(item => item.id === id);
  // console.log(id, 'id card')
  // console.log(isProductAdded, 'isAdded')
  console.log(cartData.order, 'cartData order')

  return (
    <div className="product-card__container">
      <div className="product-card__title">{title}</div>
      <div className="product-card__image">
        <img className="card__image" src={img} alt={title} />
      </div>
      <div className="product-card__description">{description}</div>
      {isProductAdded ? (
        <>
          <span className="good__added">Added!</span>
        </>
      ) : (
        <>
          <button className="product__button" onClick={() => addProductToCartCallBack(id, item)}>Buy Now</button>
        </>
      )
      }

      <div className="product-card__price">{formatPrice}</div>
    </div >
  );
}

export default ProductCard;