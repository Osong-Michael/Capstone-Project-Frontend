/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
} from './index';

function fetchShoes() {
  return dispatch => {
    dispatch(fetchShoesPending());
    axios.get('http://localhost:3001/shoes')
      .then(res => {
        dispatch(fetchShoesSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchShoesError(error));
      });
  };
}

function fetchShoe(id) {
  return dispatch => {
    dispatch(fetchShoesPending());
    fetch(`http://localhost:3001/shoes/${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchShoesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchShoesError(error));
      });
  };
}
export { fetchShoe };
export default fetchShoes;
