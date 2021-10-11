//libraries
import React from 'react';
//components

//styles
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>MegaShop</h1>
      <div className="header__right">
        <p>Profile</p>
        <p className="header__cart">0</p>
      </div>
    </header>
  );
}

export default Header;