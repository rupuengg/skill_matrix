import projectSkillService from "../services/projectSkill-service";
import { SPINNER_SHOW, SPINNER_HIDE } from "../actiontypes/spinner";
import {
  PROJECT_SKILL_LIST,
  PROJECT_SKILL_NO_DATA
} from "../actiontypes/projectSkill";
import { FLASH_SHOW, FLASH_HIDE } from "../actiontypes/flash";
import { history } from "../helpers/history";
import { EMPLOYEE_SKILL_ADD } from "../actiontypes/employee.skill";

export const getProjectSkills = (projectId: number) => async (
  dispatch: any
) => {
  dispatch({ type: SPINNER_SHOW });
  await projectSkillService.getProjectSkills(projectId).then(res => {
    if (res.data.length > 0) {
      dispatch({
        type: PROJECT_SKILL_LIST,
        payload: res.data
      });
    } else {
      dispatch({
        type: PROJECT_SKILL_NO_DATA,
        payload: res
      });
    }
    dispatch({ type: SPINNER_HIDE });
  });
};

export const getProjectSkillsByEmployeeID = (projectId: number) => async (
  dispatch: any
) => {
  dispatch({ type: SPINNER_SHOW });
  await projectSkillService
    .getProjectSkillsByEmployeeID(projectId)
    .then(res => {
      if (res.data.length > 0) {
        dispatch({
          type: PROJECT_SKILL_LIST,
          payload: res.data
        });
      } else {
        dispatch({
          type: PROJECT_SKILL_NO_DATA,
          payload: res
        });
      }
      dispatch({ type: SPINNER_HIDE });
    });
};

export const saveEmployeeProjectDetails = (data: any) => async (
  dispatch: any
) => {
  dispatch({ type: SPINNER_SHOW });
  await projectSkillService.saveEmployeeProjectDetails(data).then(res => {
    debugger;
    if (res.data.length > 0) {
      dispatch({
        type: EMPLOYEE_SKILL_ADD,
        payload: res.data
      });
    } else {
      dispatch({
        type: PROJECT_SKILL_NO_DATA,
        payload: res
      });
    }
    dispatch({ type: SPINNER_HIDE });
  });
};
