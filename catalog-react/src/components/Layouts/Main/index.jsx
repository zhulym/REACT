//libraries
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//components
import ProtectRoutes from '../../shared/ProtectedRoutes';
//constants
import { LOGIN_PAGE } from '../../../constants/routes';
//styles
import './Main.scss';

const Main = () => {
  return (
    <div className="main__content">
      <Switch>
        <Route path={LOGIN_PAGE.path} component={LOGIN_PAGE.component} />
        <ProtectRoutes />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Main;