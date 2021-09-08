import cartReduser from './cart';
import user from './user';
import { combineReducers } from 'redux';

export const rootReduser = combineReducers({
    cartReduser,
    user
});