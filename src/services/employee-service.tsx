import { reqOptions } from '../helpers/common';

const getEmployees = async () => {
  const token = localStorage.getItem('token');
  const options: object = reqOptions('GET', token);
  return fetch('http://localhost:8080/api/1.0/employees', options)
    .then(res => res.json())
    .then(res => {
      console.log('res', res);
      return res;
    });
};

const employeeService = {
  getEmployees
};

export default employeeService;