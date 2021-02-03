import { combineReducers } from 'redux';
import shoesReducer from './shoesReducer';
import shoeReducer from './shoeReducer';
import authReducer from './authReducer';
import favouriteReducer from './favouritesReducer';

const rootReducer = combineReducers({
  shoes: shoesReducer,
  shoe: shoeReducer,
  auth: authReducer,
  fav: favouriteReducer,
});

export default rootReducer;
