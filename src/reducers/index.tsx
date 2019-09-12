import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { spinnerReducer } from './spinnerReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  spinner: spinnerReducer
});