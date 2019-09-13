import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { spinnerReducer } from './spinnerReducer';
import { flashReducer } from './flashReducer';
import { employeeReducer } from './employeeReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  spinner: spinnerReducer,
  employee: employeeReducer,
  flash: flashReducer
});