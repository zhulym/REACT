//libraries
import React from "react";
//components
import Header from "./Header/index";
import Footer from "./Footer/index";
//styles

const Layout = (props) => {
  return (
    <>
      <div className="content">
        <Header />
        <div className="container">{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
