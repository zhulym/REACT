import cart from './cart';
import user from './user';
import { combineReducers } from 'redux';

export default combineReducers({
  cart,
  user,
});