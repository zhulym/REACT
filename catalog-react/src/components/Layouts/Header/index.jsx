//libraries
import React from 'react';
import { Link, } from 'react-router-dom';
//components
import cartImg from '../../../assets/images/cart.png';
//constants 
import { CART_PAGE, PRODUCTS_PAGE } from '../../../constants/routes';
//styles
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to={PRODUCTS_PAGE.path}>
        <h1 className="header__logo">MegaShop</h1>
      </Link>
      <div className="header__right">
        <p>LOGOUT</p>
        <p>Profile</p>
        <p className="header__cart">
          <Link to={CART_PAGE.path}>
            <img className="header__cart-img" src={cartImg} alt="cart" />
          </Link>
          <span className="header__cart-num">0</span>
        </p>
      </div>
    </header>
  );
}

export default Header;