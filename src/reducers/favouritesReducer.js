const initState = {
  shoes: {},
  loading: false,
  error: null,
};

const favouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_SHOES':
      return {
        ...state,
        loading: true,
      };
    case 'FETCHED_FAVOURITES':
      return {
        ...state,
        loading: false,
        shoes: action.shoes,
      };
    case 'FETCHING_SHOES_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
