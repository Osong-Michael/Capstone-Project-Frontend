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
    Axios.get(`${API_URL}favourites/all`, { headers: authHeader() })
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
    fetch(`${API_URL}favourites/new/${shoeId}`, { method: 'POST', headers: authHeader() })
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
