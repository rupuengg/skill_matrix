import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { spinnerReducer } from './spinnerReducer';

export const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  spinner: spinnerReducer
});