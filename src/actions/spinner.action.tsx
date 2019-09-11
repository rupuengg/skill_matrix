import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';

export const spinnerShow = () => (dispatch: any) => {
  dispatch({
    type: SPINNER_SHOW,
    payload: true
  });
};

export const spinnerHide = () => (dispatch: any) => {
  dispatch({
    type: SPINNER_HIDE,
    payload: false
  });
};