//libraries
import React from 'react';
import { Link, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//components
import cartImg from '../../../assets/images/cart.png';
//actions
import { logoutUser } from '../../../actions/user';
//constants 
import { CART_PAGE, PRODUCTS_PAGE, ACCOUNT_PAGE } from '../../../constants/routes';
//styles
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(({ user }) => user);
  const cartData = useSelector(({ cart }) => cart);

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <header className="header">
      <Link to={PRODUCTS_PAGE.path}>
        <h1 className="header__logo">MegaShop</h1>
      </Link>
      {!!userData && (
        <div className="header__right">
          <p className="logout__button" onClick={handleLogout}>LOGOUT</p>
          <Link to={ACCOUNT_PAGE.path}>
            <p className="profile__button">PROFILE</p>
          </Link>
          <p className="header__cart">
            <Link to={CART_PAGE.path}>
              <img className="header__cart-img" src={cartImg} alt="cart" />
            </Link>
            <span className="header__cart-num">{cartData.order.length}</span>
          </p>
        </div>
      )}

    </header>
  );
}

export default Header;