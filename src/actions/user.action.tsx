import userService from '../services/user-service';
import { USER_LOGIN } from '../actiontypes/user';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { history } from '../helpers/history';

export const userLogin = (email: string, password: string) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await userService.userAuthentication(email, password)
    .then(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));

      dispatch({
        type: USER_LOGIN,
        payload: res.user
      });

      dispatch({ type: SPINNER_HIDE });

      history.push('/');
    })
    .catch(err => {
      console.log(err);
    });
};