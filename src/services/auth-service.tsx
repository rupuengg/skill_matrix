import { reqOptions, reqOptionsWithout } from '../helpers/common';

const authentication = async (email: string, password: string) => {
  const request: Request = reqOptionsWithout('http://localhost:8080/api/1.0/auth', 'POST', { email, password });
  return fetch(request)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log('S Error', err);
    });
};

const logout = async () => {
  const request: Request = reqOptions('http://localhost:8080/api/1.0/auth', 'DELETE');
  return fetch(request)
    .then(res => res.json())
    .then(res => {
      return res.data;
    });
};

const authService = {
  authentication,
  logout
};

export default authService;