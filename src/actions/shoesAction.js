import Axios from 'axios';
import {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
  fetchOneShoePending,
  fetchOneShoeSuccess,
  fetchOneShoeError,
} from './index';
import { authHeader } from './authActions';

const API_URL = 'https://dem-shoes.herokuapp.com/';

export const fetchShoes = () => async dispatch => {
  try {
    dispatch(fetchShoesPending());
    const response = await Axios.get(`${API_URL}shoes`, { headers: authHeader() });
    dispatch(fetchShoesSuccess(response.data));
  } catch (error) {
    dispatch(fetchShoesError(error));
  }
};

export const fetchShoe = id => async dispatch => {
  try {
    dispatch(fetchOneShoePending());
    const response = await Axios.get(`${API_URL}shoes/${id}`, { headers: authHeader() });
    dispatch(fetchOneShoeSuccess(response.data));
  } catch (error) {
    dispatch(fetchOneShoeError(error));
  }
};
