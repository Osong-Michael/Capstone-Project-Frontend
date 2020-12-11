import axios from 'axios';
import { getFavouriteShoes, fetchShoesPending, fetchShoesError } from './index';

function getFavourites() {
  return dispatch => {
    dispatch(fetchShoesPending());
    axios.get('http://localhost:3001/favourites/all', { withCredentials: true })
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
    axios.post(`http://localhost:3001/favourites/new/{${shoeId},${userId}}`, { withCredentials: true })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        dispatch(fetchShoesError(error));
      });
  };
}

export { createFav };
export default getFavourites;
