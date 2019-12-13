import { FLASH_SHOW, FLASH_HIDE } from '../actiontypes/flash';

export const initialState = {
  message: ""
};

export const flashReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FLASH_SHOW:
      return { ...state, message: action.payload };
    case FLASH_HIDE:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
}