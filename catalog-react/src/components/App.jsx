//libraries
import React from 'react';
//components
import Header from "./Layouts/Header/index";
import Footer from "./Layouts/Footer/index";
import Main from "./Layouts/Main/index";
//styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
