import {
  getFavouriteShoes,
  fetchShoesPending,
  fetchShoesError,
  getFavouriteShoesSuccess,
} from './index';
import { authHeader } from './authActions';
import API from './api';

function getFavourites() {
  return dispatch => {
    dispatch(fetchShoesPending());
    API.get('favs', { headers: authHeader() })
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
    API.post('favs', { shoe_id: shoeId }, { headers: authHeader() })
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
