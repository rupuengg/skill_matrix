import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';

const initialState = {
  spinner: false
};

export const spinnerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SPINNER_SHOW:
      return { ...state, spinner: true };
    case SPINNER_HIDE:
      return { ...state, spinner: false };
    default:
      return state;
  };
};