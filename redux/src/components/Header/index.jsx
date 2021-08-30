// libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  let getAmount = 0;
  const goodsState = useSelector(({ cartReduser }) => cartReduser);
  goodsState.forEach(el => el.count ? getAmount += 1 : null);

  return (
    <div className="header">
      <Link to="/"><h2>Catalog</h2></Link>
      <Link to="/cart"><h2>Cart</h2></Link>
      <div className="cart-amount">{getAmount}</div>
    </div>
  );
};

export default Header;