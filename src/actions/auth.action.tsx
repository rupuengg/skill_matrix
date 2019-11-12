import authService from '../services/auth-service';
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGGOUT } from '../actiontypes/user';
import { SPINNER_SHOW, SPINNER_HIDE } from '../actiontypes/spinner';
import { history } from '../helpers/history';
import AdminLayout from '../components/layouts/admin.layout';

export const authentication = (email: string, password: string) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await authService.authentication(email, password)
    .then((res: any) => {
      const token = res.data ? res.data.token : null;
      if (token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch({
          type: USER_LOGIN,
          payload: res.data.user
        });

       // console.log(res.data.user);
        history.push('/Dashboard');
  
      
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

export const logout = () => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await authService.logout()
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