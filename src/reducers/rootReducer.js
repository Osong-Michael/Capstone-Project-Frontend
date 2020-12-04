/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import shoeReducer from './shoesReducer';

const rootReducer = combineReducers({
  shoe: shoeReducer,
});

export default rootReducer;
