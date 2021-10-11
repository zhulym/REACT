//libraries
import React from 'react';
//components
import cartImg from '../../../assets/images/cart.png';
//styles
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>MegaShop</h1>
      <div className="header__right">
        <p>Profile</p>
        <p className="header__cart">
          <img className="header__cart-img" src={cartImg} alt="cart" />
          <span className="header__cart-num">0</span>
        </p>
      </div>
    </header>
  );
}

export default Header;