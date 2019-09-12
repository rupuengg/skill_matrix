import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGGOUT } from '../actiontypes/user';

const initialState = {
  isLoggedIn: false,
  errors: {}
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoggedIn: true, user: action.payload, errors: {} };
    case USER_LOGGOUT:
      return { ...state, isLoggedIn: false };
    case USER_LOGIN_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  };
};