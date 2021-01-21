const initState = {
  shoes: [],
  status: null,
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
        status: action.status,
      };
    case 'FETCHING_SHOES_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'FETCHED_FAVOURITES_SUCCESSFUL':
      return {
        ...state,
        loading: false,
        status: action.status.status,
      };
    default:
      return state;
  }
};

export const getFavShoes = state => state.fav.shoes;
export const getFavStatus = state => state.fav.status;

export default favouriteReducer;
