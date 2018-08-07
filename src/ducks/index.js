import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux'

import auth from './auth';

const reducer = combineReducers({
  auth,
  router: routerReducer
});

export default reducer;
