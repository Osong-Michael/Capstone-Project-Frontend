import axios from 'axios';
import {
  signingUp,
  signUpSuccess,
  signUpError,
  loggingIn,
  logInSuccess,
  logInError,
  userIsLoggedOut,
  userIsLoggedInFalse,
  userIsLoggedIn,
} from './index';

const API_URL = 'https://dem-shoes.herokuapp.com/';

function signUpUser(credentials) {
  return async dispatch => {
    dispatch(signingUp());
    await axios.post(`${API_URL}users`,
      {
        username: credentials.username,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation,
      })
      .then(res => {
        if (res.data.jwt === undefined) {
          dispatch(signUpError(res.data.errors));
        } else {
          dispatch(signUpSuccess(res.data));
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch(error => {
        dispatch(signUpError(error));
      });
  };
}

function logInUser(credentials) {
  return async dispatch => {
    dispatch(loggingIn());
    await axios.post(`${API_URL}login`,
      {
        username: credentials.username,
        password: credentials.password,
      })
      .then(res => {
        if (res.data.jwt === undefined) {
          dispatch(logInError(res.data.failure));
        } else {
          dispatch(logInSuccess(res.data));
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch(error => {
        dispatch(logInError(error));
      });
  };
}

const checkStatus = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return dispatch => {
    if (user !== null) {
      dispatch(userIsLoggedIn(user));
      return user;
    }
    dispatch(userIsLoggedInFalse());
    return {
      type: 'USER_NOT_LOGGED_IN',
      loggedIn: false,
    };
  };
};

function logUserOut() {
  localStorage.removeItem('user');
  return dispatch => {
    dispatch(userIsLoggedOut('Logged Out'));
  };
}

function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.jwt) {
    return { Authorization: `Bearer ${user.jwt}` };
  }
  return {};
}

export {
  logInUser,
  checkStatus,
  logUserOut,
  authHeader,
};
export default signUpUser;
