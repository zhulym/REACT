//libraries
import React, { useCallback, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//components
import ProtectRoutes from '../../shared/ProtectedRoutes';
//api
import { getCart } from '../../../api/goods';
//actions
import { setCart } from '../../../actions/cart';
//constants
import { LOGIN_PAGE } from '../../../constants/routes';
//styles
import './Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  const userData = useSelector(({ user }) => user);

  const fetchCart = useCallback(async () => {
    if (!userData) {
      return;
    }
    try {
      const data = (await getCart()) || [];
      dispatch(setCart(data));
    } catch (error) {
      console.log(error);
    }
  }, [userData]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

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