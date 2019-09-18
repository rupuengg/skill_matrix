import userService from '../services/user-service';
import { USER_GET, USER_PROFILE_UPDATE } from '../actiontypes/user';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { FLASH_SHOW, FLASH_HIDE } from '../actiontypes/flash';
import { history } from '../helpers/history';

export const userGet = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await userService.userGet()
    .then(res => {
      if (res.status === 200) {
        res.json().then(result => {
          dispatch({
            type: USER_GET,
            payload: result.data
          });
          dispatch({ type: SPINNER_HIDE });
        });
      } else {
        history.push('/login');
      }
      dispatch({ type: SPINNER_HIDE });
    })
    .catch(err => {
      console.log(err);
    });
};

export const profileUpdate = (data: any) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await userService.profileUpdate(data)
    .then(res => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          dispatch({
            type: USER_PROFILE_UPDATE,
            payload: data
          });
          dispatch({ type: FLASH_SHOW, payload: result.status });
          dispatch({ type: SPINNER_HIDE });
          setTimeout(() => {
            dispatch({ type: FLASH_HIDE, payload: "" });
          }, 3000);
        });
      } else {
        history.push('/login');
      }
    })
    .catch(err => {
      console.log(err);
    });
};