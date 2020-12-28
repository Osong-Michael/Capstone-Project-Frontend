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
    axios.get('https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/shoes')
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
    axios.get(`https://cors-anywhere.herokuapp.com/https://vast-earth-24958.herokuapp.com/shoes/${id}`)
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
