/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
  fetchOneShoePending,
  fetchOneShoeSuccess,
  fetchOneShoeError,
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
    dispatch(fetchOneShoePending());
    axios.get(`http://localhost:3001/shoes/${id}`)
      .then(res => {
        dispatch(fetchOneShoeSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchOneShoeError(error));
      });
  };
}
export { fetchShoe };
export default fetchShoes;
