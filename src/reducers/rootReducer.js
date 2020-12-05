/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import shoeReducer from './shoesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  shoe: shoeReducer,
  auth: authReducer,
});

export default rootReducer;
