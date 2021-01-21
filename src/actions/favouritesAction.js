import Axios from 'axios';
import {
  getFavouriteShoes,
  fetchShoesPending,
  fetchShoesError,
  getFavouriteShoesSuccess,
} from './index';
import { authHeader } from './authActions';

const API_URL = 'https://dem-shoes.herokuapp.com/';

function getFavourites() {
  return dispatch => {
    dispatch(fetchShoesPending());
    Axios.get(`${API_URL}favs`, { headers: authHeader() })
      .then(res => {
        dispatch(getFavouriteShoes(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchShoesError(error));
      });
  };
}

function createFav(shoeId) {
  return dispatch => {
    Axios.post(`${API_URL}favs`, { shoe_id: shoeId }, { headers: authHeader() })
      .then(res => {
        dispatch(getFavouriteShoesSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchShoesError(error));
      });
  };
}

export { createFav };
export default getFavourites;
