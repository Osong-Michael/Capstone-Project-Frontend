const initState = {
  shoe: {},
  loading: false,
  error: null,
};

const shoesReducer = (state = initState, action) => {
  switch (action.type) {
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

export const getOneShoe = state => state.shoe.shoe;
export const getShoePending = state => state.shoe.loading;

export default shoesReducer;
