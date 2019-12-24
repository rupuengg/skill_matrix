import projectSkillService from "../services/projectSkill-service";
import { SPINNER_SHOW, SPINNER_HIDE } from "../actiontypes/spinner";
import {
  PROJECT_SKILL_LIST,
  PROJECT_SKILL_NO_DATA,
  PROJECT_SKILL_UPSERT
} from "../actiontypes/projectSkill";
import { FLASH_SHOW, FLASH_HIDE } from "../actiontypes/flash";
import { history } from "../helpers/history";

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

export const upsertProjectSkills = (projectSkills: any) => async (
  dispatch: any
) => {
  debugger;
  dispatch({ type: SPINNER_SHOW });
  await projectSkillService
    .upsertProjectSkills(projectSkills)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: PROJECT_SKILL_UPSERT,
            payload: result.status
          });
          history.push("/projects");
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
