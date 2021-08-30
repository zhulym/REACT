// libraries
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const goodsState = useSelector(({ cartReduser }) => cartReduser);
  let getAmount = null;

  goodsState.forEach(el => {
    getAmount += el.count;
  });

  useEffect(() => {
    goodsState.forEach(el => {
      getAmount += el.count;
    });
  }, [goodsState]);

  return (
    <div className="header">
      <Link to="/"><h2>Catalog</h2></Link>
      <Link to="/cart"><h2>Cart</h2></Link>
      <div className="cart-amount">{getAmount}</div>
    </div>
  );
};

export default Header;