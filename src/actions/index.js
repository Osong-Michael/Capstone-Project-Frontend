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

function fetchOneShoePending() {
  return {
    type: 'FETCHING_ONE_SHOE',
  };
}

function fetchOneShoeSuccess(shoe) {
  return {
    type: 'FETCHED_ONE_SHOE',
    shoe,
  };
}

function fetchOneShoeError(error) {
  return {
    type: 'FETCHING_ONE_SHOE_FAILED',
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

function userIsLoggedInFalse() {
  return {
    type: 'CHECK_LOGIN_STATUS_FAIL',
  };
}

function userIsLoggedIn(user) {
  return {
    type: 'CHECK_LOGIN_STATUS',
    user,
  };
}

function userIsLoggedOut(status) {
  return {
    type: 'LOG_OUT_USER',
    status,
  };
}

function getFavouriteShoes(shoes) {
  return {
    type: 'FETCHED_FAVOURITES',
    shoes,
  };
}

function getFavouriteShoesSuccess(status) {
  return {
    type: 'FETCHED_FAVOURITES_SUCCESSFUL',
    status,
  };
}

export {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
  fetchOneShoePending,
  fetchOneShoeSuccess,
  fetchOneShoeError,
  signingUp,
  signUpSuccess,
  signUpError,
  loggingIn,
  logInSuccess,
  logInError,
  userIsLoggedIn,
  userIsLoggedInFalse,
  userIsLoggedOut,
  getFavouriteShoes,
  getFavouriteShoesSuccess,
};
