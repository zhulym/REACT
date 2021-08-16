import React from "react";
import mod from "./Header.module.css";

const Header = () => {
  return (
    <header className={mod.header}>
      <div>
        <img src="/images/logo.jpg" alt=""></img>
      </div>
    </header>
  );
};

export default Header;
