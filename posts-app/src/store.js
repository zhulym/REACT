import { createStore } from 'redux';
import { rootReduser } from './redusers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReduser,
  composeWithDevTools()
);
