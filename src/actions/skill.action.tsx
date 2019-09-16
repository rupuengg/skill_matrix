import skillService from '../services/skill-service';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { SKILL_LIST, SKILL_NO_DATA, SKILL_ADD, SKILL_EDIT, SKILL_DELETE } from '../actiontypes/skill';
import { FLASH_SHOW, FLASH_HIDE } from '../actiontypes/flash';
import { history } from '../helpers/history';

export const getSkills = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await skillService.getSkills()
    .then(res => {
      if (res.data.length > 0) {
        dispatch({
          type: SKILL_LIST,
          payload: res.data
        })
      } else {
        dispatch({
          type: SKILL_NO_DATA,
          payload: res
        })
      }
      dispatch({ type: SPINNER_HIDE });
    });
};

export const getSkill = (empId: number) => async (dispatch: any) => {
  await skillService.getSkill(empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: SKILL_EDIT,
            payload: result
          })
        });
      }
    });
};

export const createSkill = (data: any) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await skillService.createSkill(data)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: SKILL_ADD,
            payload: result.status
          });
          history.push('/skills');
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

export const editSkill = (empId: number) => (dispatch: any) => {
  dispatch({
    type: SKILL_EDIT,
    EMP_ID: empId
  });
};

export const updateSkill = (data: any, empId: number) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await skillService.updateSkill(data, empId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: SKILL_EDIT,
            payload: result.status
          });
          history.push('/skills');
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

export const deleteSkill = (skillId: number) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await skillService.deleteSkill(skillId)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: SKILL_DELETE,
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