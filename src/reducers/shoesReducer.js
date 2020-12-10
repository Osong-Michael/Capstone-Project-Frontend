const initState = {
  shoes: [],
  shoe: {},
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
    case 'FETCHING_ONE_SHOE':
      return {
        ...state,
        loading: true,
      };
    case 'FETCHED_ONE_SHOE':
      return {
        ...state,
        loading: false,
        shoe: action.shoe,
      };
    case 'FETCHING_ONE_SHOE_FAILED':
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
export const getOneShoe = state => state.shoe.shoe;
export const getShoesPending = state => state.shoe.loading;

export default shoesReducer;
