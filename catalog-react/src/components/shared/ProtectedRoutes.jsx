//libraries
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//constants
import { PROTECTED_ROUTES, LOGIN_PAGE } from '../../constants/routes';

const ProtectedRoutes = () => {
  const history = useHistory();
  const isUserLoggedIn = useSelector(({ user }) => !!user);

  if (!isUserLoggedIn) {
    history.replace(LOGIN_PAGE.path)
  }

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