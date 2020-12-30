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
  userIsLoggedInPending,
} from './index';

function signUpUser(credentials) {
  return dispatch => {
    dispatch(signingUp());
    axios.post('https://rocky-reaches-49310.herokuapp.com/registrations', {
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
    axios.post('https://rocky-reaches-49310.herokuapp.com/sessions', {
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
    dispatch(userIsLoggedInPending());
    axios.get('https://rocky-reaches-49310.herokuapp.com/logged_in', { withCredentials: true })
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
    axios.delete('https://cors-anywhere.herokuapp.com/https://rocky-reaches-49310.herokuapp.com/logout', { withCredentials: true }, { 'Content-Type': 'application/json' })
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
