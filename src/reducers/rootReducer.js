import { combineReducers } from 'redux';
import shoeReducer from './shoesReducer';
import authReducer from './authReducer';
import favouriteReducer from './favouritesReducer';

const rootReducer = combineReducers({
  shoe: shoeReducer,
  auth: authReducer,
  fav: favouriteReducer,
});

export default rootReducer;
