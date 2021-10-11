//libraries
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//actions

//components
import Products from "./Products/index";
import Login from "../Login/index";
//styles
import './Main.scss';

const Main = () => {
  return (
    <div className="main__content">
      <Switch>

        <Route path="/Login" component={Login} />

        <Route exact path="/" component={Products} />
        {/* <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
        <Route path="/admin" component={Admin} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Main;