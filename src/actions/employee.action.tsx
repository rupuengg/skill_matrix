import employeeService from '../services/employee-service';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { EMPLOYEE_LIST, EMPLOYEE_NO_DATA } from '../actiontypes/employee';

export const getEmployees = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeService.getEmployees()
    .then(res => {
      if (res.data.length > 0) {
        dispatch({
          type: EMPLOYEE_LIST,
          payload: res.data
        })
      } else {
        dispatch({
          type: EMPLOYEE_NO_DATA,
          payload: res
        })
      }
      dispatch({ type: SPINNER_HIDE });
    })
};