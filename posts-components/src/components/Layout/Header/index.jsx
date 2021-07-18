//libraries
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//components
//styles
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          Posts Application
        </Link>
        <Button outline color="primary">
          Add Post
        </Button>{" "}
      </div>
    </header>
  );
};

export default Header;
