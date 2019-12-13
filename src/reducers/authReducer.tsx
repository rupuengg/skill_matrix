import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGGOUT, USER_GET, USER_PROFILE_UPDATE } from '../actiontypes/user';

const initialState = {
  isLoggedIn: false,
  errors: {},
  user: {}
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoggedIn: true, user: action.payload, errors: {} };
    case USER_LOGGOUT:
      return { ...state, isLoggedIn: false, user: {} };
    case USER_LOGIN_ERROR:
      return { ...state, errors: action.payload };
    case USER_GET:
      return { ...state, user: action.payload };
    case USER_PROFILE_UPDATE:
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  };
};