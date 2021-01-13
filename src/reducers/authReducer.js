const initState = {
  user: {},
  favShoes: [],
  loading: false,
  error: null,
  jwt: '',
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
        jwt: action.user.jwt,
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
        jwt: action.user.jwt,
      };
    case 'LOGGING_IN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'CHECK_LOGIN_STATUS_START':
      return {
        ...state,
        loading: true,
      };
    case 'CHECK_LOGIN_STATUS':
      return {
        ...state,
        loading: false,
        favShoes: action.user.fav_shoe,
        jwt: action.user.jwt,
      };
    case 'LOG_OUT_USER':
      return {
        ...state,
        loggedIn: action.status.logged_in,
      };
    default:
      return state;
  }
};

export const getStatus = state => state.auth.jwt;
export const getUser = state => state.auth.user;
export const getLoading = state => state.auth.loading;

export default authReducer;
