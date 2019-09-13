import employeeService from '../services/employee-service';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { EMPLOYEE_LIST, EMPLOYEE_NO_DATA, EMPLOYEE_ADD } from '../actiontypes/employee';
import { FLASH_SHOW, FLASH_HIDE } from '../actiontypes/flash';
import { history } from '../helpers/history';

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

export const createEmployee = (data: any) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeService.createEmployee(data)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_ADD,
            payload: result.status
          });
          history.push('/employee');
          dispatch({ type: FLASH_SHOW, payload: result.status });
          setTimeout(() => {
            dispatch({ type: FLASH_HIDE, payload: "" });
          }, 3000);
        });
      }
      dispatch({ type: SPINNER_HIDE });
    })
    .catch(err => {
      console.log();
    })
};