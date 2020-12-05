/* eslint-disable linebreak-style */
function fetchShoesPending() {
  return {
    type: 'FETCHING_SHOES',
  };
}

function fetchShoesSuccess(shoes) {
  return {
    type: 'FETCHED_SHOES',
    shoes,
  };
}

function fetchShoesError(error) {
  return {
    type: 'FETCHING_SHOES_FAILED',
    error,
  };
}

function signingUp() {
  return {
    type: 'SIGNING_UP',
  };
}

function signUpSuccess(user) {
  return {
    type: 'SIGNED_UP_SUCCESFUL',
    user,
  };
}

function signUpError(error) {
  return {
    type: 'SIGNED_UP_FAILURE',
    error,
  };
}

function loggingIn() {
  return {
    type: 'LOGGING_IN',
  };
}

function logInSuccess(user) {
  return {
    type: 'LOGGING_IN_SUCCESFUL',
    user,
  };
}

function logInError(error) {
  return {
    type: 'LOGGING_IN_FAILURE',
    error,
  };
}

export {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
  signingUp,
  signUpSuccess,
  signUpError,
  loggingIn,
  logInSuccess,
  logInError,
};
