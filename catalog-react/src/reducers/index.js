import cart from './cart';
import user from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  cart,
  user
});