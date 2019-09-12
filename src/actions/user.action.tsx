import userService from '../services/user-service';
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGGOUT } from '../actiontypes/user';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { history } from '../helpers/history';

export const userLogin = (email: string, password: string) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await userService.userAuthentication(email, password)
    .then((res: any) => {
      const token = res.data ? res.data.token : null;
      if (token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        dispatch({
          type: USER_LOGIN,
          payload: res.user
        });

        history.push('/');
      } else {
        dispatch({
          type: USER_LOGIN_ERROR,
          payload: res
        });
      }

      dispatch({ type: SPINNER_HIDE });
    })
    .catch(err => {
      console.log('A Error', err);
    });
};

export const userLogout = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await userService.userLogout()
    .then(res => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      dispatch({
        type: USER_LOGGOUT
      });

      dispatch({ type: SPINNER_HIDE });

      history.push('/login');
    })
    .catch(err => {
      console.log(err);
    });
};