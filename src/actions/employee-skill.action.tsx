import employeeSkillService from '../services/employee-skill-service';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { EMPLOYEE_SKILL_LIST, EMPLOYEE_SKILL_NO_DATA, EMPLOYEE_SKILL_ADD, EMPLOYEE_SKILL_EDIT, EMPLOYEE_SKILL_DELETE } from '../actiontypes/employee.skill';
import { FLASH_SHOW, FLASH_HIDE } from '../actiontypes/flash';
import { history } from '../helpers/history';

export const getEmployeeSkills = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeSkillService.getEmployeeSkills()
    .then(res => {
      if (res.data.length > 0) {
        dispatch({
          type: EMPLOYEE_SKILL_LIST,
          payload: res.data
        })
      } else {
        dispatch({
          type: EMPLOYEE_SKILL_NO_DATA,
          payload: res
        })
      }
      dispatch({ type: SPINNER_HIDE });
    });
};

export const getEmployeeSkill = (empId: number) => async (dispatch: any) => {
  await employeeSkillService.getEmployeeSkill(empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_SKILL_EDIT,
            payload: result
          })
        });
      }
    });
};

export const createEmployeeSkill = (data: any) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeSkillService.createEmployeeSkill(data)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_SKILL_ADD,
            payload: result.status
          });
          history.push('/employee/skills');
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
export const editEmployeeSkill = (empId: number) => (dispatch: any) => {
  dispatch({
    type: EMPLOYEE_SKILL_EDIT,
    EMP_ID: empId
  });
};

export const updateEmployeeSkill = (data: any, empId: number) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeSkillService.updateEmployeeSkill(data, empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_SKILL_EDIT,
            payload: result.status
          });
          history.push('/employee/skills');
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

export const deleteEmployeeSkill = (empId: number) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await employeeSkillService.deleteEmployeeSkill(empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: EMPLOYEE_SKILL_DELETE,
            payload: {
              status: result.status,
              deleteId: result.data
            },
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
    })
};