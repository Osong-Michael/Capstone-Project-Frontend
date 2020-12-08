/* eslint-disable linebreak-style */
import axios from 'axios';
import {
  signingUp,
  signUpSuccess,
  signUpError,
  loggingIn,
  logInSuccess,
  logInError,
  userIsLoggedIn,
  userIsLoggedOut,
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

function checkStatus() {
  return dispatch => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(res => {
        dispatch(userIsLoggedIn(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(logInError(error));
      });
  };
}

function logUserOut() {
  return dispatch => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(res => {
        dispatch(userIsLoggedOut(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(logInError(error));
      });
  };
}

export { logInUser, checkStatus, logUserOut };
export default signUpUser;
