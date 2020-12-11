const initState = {
  user: {},
  loading: false,
  error: null,
  loggedIn: false,
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
        loggedIn: action.user.logged_in,
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
        loggedIn: action.user.logged_in,
      };
    case 'LOGGING_IN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'CHECK_LOGIN_STATUS':
      return {
        ...state,
        loggedIn: action.status.logged_in,
        user: action.status.user,
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

export const getStatus = state => state.auth.loggedIn;
export const getUser = state => state.auth.user;

export default authReducer;
