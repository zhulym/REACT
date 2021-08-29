// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import Catalog from './Catalog/index';
import Cart from './Cart/index';
import Header from './Header/index';
// styles
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
