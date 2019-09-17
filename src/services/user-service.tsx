import { reqOptions } from '../helpers/common';

const userGet = async () => {
  const request: Request = reqOptions('http://localhost:8080/api/1.0/users', 'GET');
  return fetch(request)
    .then(res => {
      return res;
    });
};

const profileUpdate = async (data: any) => {
  const request: Request = reqOptions('http://localhost:8080/api/1.0/users', 'POST', data);
  return fetch(request)
    .then((res: any) => {
      return res;
    });
};

const userService = {
  userGet,
  profileUpdate
};

export default userService;