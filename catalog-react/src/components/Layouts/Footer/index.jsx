//libraries
import React from 'react';
//components

//styles
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; all rights reserved <span>{new Date().getFullYear()}</span></p>
      <p>MegaShop</p>
    </footer>
  );
}

export default Footer;