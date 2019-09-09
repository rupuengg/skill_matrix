import userService from '../services/user-service';
import { USER_LOGIN } from '../actiontypes/user';

export const userLogin = (username: string, password: string) => (dispatch: any) => {
  return userService
    .userAuthentication(username, password)
    .then(res => {
      dispatch({
        type: USER_LOGIN,
        payload: res
      });
    })
    .catch(err => {
      console.log(err);
    });
};