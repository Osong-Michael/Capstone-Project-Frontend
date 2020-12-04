/* eslint-disable linebreak-style */
const initState = {
  shoes: [],
  loading: false,
  error: null,
};

const shoesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_SHOES':
      return {
        ...state,
        loading: true,
      };
    case 'FETCHED_SHOES':
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

export const getShoes = state => state.shoe.shoes;
export const getShoesPending = state => state.shoe.loading;

export default shoesReducer;
