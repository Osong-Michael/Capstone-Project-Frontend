/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  signingUp,
  signUpSuccess,
  signUpError,
  loggingIn,
  logInSuccess,
  logInError,
} from './index';

function signUpUser(credentials) {
  return dispatch => {
    dispatch(signingUp());
    axios.post('http://localhost:3001/registrations', {
      user: {
        username: credentials.username,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation,
      },
    },
    { withCredentials: true })
      .then(res => {
        dispatch(signUpSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(signUpError(error));
      });
  };
}

function logInUser(credentials) {
  return dispatch => {
    dispatch(loggingIn());
    axios.post('http://localhost:3001/sessions', {
      user: {
        username: credentials.username,
        password: credentials.password,
      },
    },
    { withCredentials: true })
      .then(res => {
        if (res.data.status !== 'created') {
          dispatch(logInError(res.data));
        }
        if (res.data.status === 'created') {
          dispatch(logInSuccess(res.data));
        }
        return res.data;
      })
      .catch(error => {
        dispatch(logInError(error));
      });
  };
}
export { logInUser };
export default signUpUser;
