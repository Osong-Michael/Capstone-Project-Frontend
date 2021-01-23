import {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
  fetchOneShoePending,
  fetchOneShoeSuccess,
  fetchOneShoeError,
} from './index';
import { authHeader } from './authActions';
import API from './api';

export const fetchShoes = () => async dispatch => {
  try {
    dispatch(fetchShoesPending());
    const response = await API.get('shoes', { headers: authHeader() });
    dispatch(fetchShoesSuccess(response.data));
  } catch (error) {
    dispatch(fetchShoesError(error));
  }
};

export const fetchShoe = id => async dispatch => {
  try {
    dispatch(fetchOneShoePending());
    const response = await API.get(`shoes/${id}`, { headers: authHeader() });
    dispatch(fetchOneShoeSuccess(response.data));
  } catch (error) {
    dispatch(fetchOneShoeError(error));
  }
};
