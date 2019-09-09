import { USER_LOGIN } from '../actiontypes/user';

const initialState = {
  isLoggedIn: false
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoggedIn: !state.isLoggedIn, user: action.payload };
    default:
      return state;
  };
};