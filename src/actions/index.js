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

export {
  fetchShoesPending,
  fetchShoesSuccess,
  fetchShoesError,
};
