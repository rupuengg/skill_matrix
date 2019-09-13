import { reqOptions } from '../helpers/common';
// import { OptionInterface } from '../interfaces/option.interface';

const getEmployees = async () => {
  const token = localStorage.getItem('token');
  const request: Request = reqOptions('http://localhost:8080/api/1.0/employees', 'GET', token);
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const createEmployee = async (data: any) => {
  const token = localStorage.getItem('token');
  const options: Request = reqOptions('http://localhost:8080/api/1.0/employees', 'POST', token, data);
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    })
};

const employeeService = {
  getEmployees,
  createEmployee
};

export default employeeService;