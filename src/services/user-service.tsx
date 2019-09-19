import { reqOptions, reqOptionsUpload } from '../helpers/common';

const userGet = async () => {
  const request: Request = reqOptions('http://localhost:8080/api/1.0/users', 'GET');
  return fetch(request)
    .then(res => {
      return res;
    });
};

const profileUpdate = async (data: any) => {
  var formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  const request: Request = reqOptionsUpload('http://localhost:8080/api/1.0/users', 'POST', formData);
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