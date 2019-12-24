import employeeService from "../services/employee-service";
import { SPINNER_SHOW, SPINNER_HIDE } from "../actiontypes/spinner";
import {
  EMPLOYEE_LIST,
  EMPLOYEE_SKILL,
  EMPLOYEE_NO_DATA,
  EMPLOYEE_ADD,
  EMPLOYEE_EDIT,
  EMPLOYEE_DELETE
} from "../actiontypes/employee";
import { FLASH_SHOW, FLASH_HIDE } from "../actiontypes/flash";
import { history } from "../helpers/history";

export const getEmployees = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeService.getEmployees().then(res => {
    if (res.data) {
      dispatch({
        type: EMPLOYEE_LIST,
        payload: res.data
      });
    } else {
      dispatch({
        type: EMPLOYEE_NO_DATA,
        payload: res
      });
    }
    dispatch({ type: SPINNER_HIDE });
  });
};

export const getEmployee = (empId: number) => async (dispatch: any) => {
  await employeeService.getEmployee(empId).then(res => {
    if (res.status === 200) {
      res.json().then((result: any) => {
        dispatch({
          type: EMPLOYEE_EDIT,
          payload: result
        });
      });
    }
  });
};
//Dashboard
export const getDetailsEmployee = () => async (dispatch: any) => {
  await employeeService
    .getDetailsEmployee()
    .then(res => {
      console.log("result", res);
      dispatch({
        type: EMPLOYEE_SKILL,
        payload: res.newEmps
      });
    })
    .catch(err => {
      dispatch({
        type: EMPLOYEE_NO_DATA,
        payload: err
      });
    });
};

export const createEmployee = (data: any) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeService
    .createEmployee(data)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_ADD,
            payload: result.status
          });
          history.push("/employee");
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
    });
};

export const editEmployee = (empId: number) => (dispatch: any) => {
  dispatch({
    type: EMPLOYEE_EDIT,
    EMP_ID: empId
  });
};

export const updateEmployee = (data: any, empId: number) => async (
  dispatch: any
) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeService
    .updateEmployee(data, empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_EDIT,
            payload: result.status
          });
          history.push("/employee");
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
    });
};

export const deleteEmployee = (empId: number) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeService
    .deleteEmployee(empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_DELETE,
            payload: {
              status: result.status,
              deleteId: result.data
            }
          });
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
    });
};
