//libraries
import React from 'react';
import { Redirect, Route, } from 'react-router-dom';
//constants
import { PROTECTED_ROUTES, } from '../../constants/routes';

const ProtectedRoutes = () => {
  // if (!isUserLoggedIn) {
  //   <Redirect to={LOGIN_PAGE.path} />
  // }
  return (
    PROTECTED_ROUTES.map(route =>
      <Route
        key={route.id}
        exact={route.isExact}
        path={route.path}
        component={route.component}
      />
    ))
};

export default ProtectedRoutes;