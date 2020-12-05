/* eslint-disable linebreak-style */
const initState = {
  user: {},
  loading: false,
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNING_UP':
      return {
        ...state,
        loading: true,
      };
    case 'SIGNED_UP_SUCCESFUL':
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case 'SIGNED_UP_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'LOGGING_IN':
      return {
        ...state,
        loading: true,
      };
    case 'LOGGING_IN_SUCCESFUL':
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case 'LOGGING_IN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// export const getShoes = state => state.shoe.shoes;
// export const getShoesPending = state => state.shoe.loading;

export default authReducer;
