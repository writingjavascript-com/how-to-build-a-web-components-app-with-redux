import {createStore, combineReducers} from 'redux/es/redux.mjs';

import {reducer} from './reducer.js';

export const store = createStore(
  combineReducers({reducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);