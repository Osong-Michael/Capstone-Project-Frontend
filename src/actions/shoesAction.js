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
    axios.get('https://cors-anywhere.herokuapp.com/https://rocky-reaches-49310.herokuapp.com/shoes', { 'Content-Type': 'application/json' })
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
    axios.get(`https://cors-anywhere.herokuapp.com/https://rocky-reaches-49310.herokuapp.com/shoes/${id}`, { 'Content-Type': 'application/json' })
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
