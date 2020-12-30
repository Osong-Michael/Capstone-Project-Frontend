import axios from 'axios';
import {
  getFavouriteShoes,
  fetchShoesPending,
  fetchShoesError,
  getFavouriteShoesSuccess,
} from './index';

function getFavourites() {
  return dispatch => {
    dispatch(fetchShoesPending());
    axios.get('https://cors-anywhere.herokuapp.com/https://rocky-reaches-49310.herokuapp.com/favourites/all', { withCredentials: true })
      .then(res => {
        dispatch(getFavouriteShoes(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchShoesError(error));
      });
  };
}

function createFav(shoeId, userId) {
  return dispatch => {
    axios.post(`https://cors-anywhere.herokuapp.com/https://rocky-reaches-49310.herokuapp.com/favourites/new/{${shoeId},${userId}}`, { withCredentials: true })
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
