import { reqOptions } from '../helpers/common';

const getEmployeeSkills = async () => {
  const request: Request = reqOptions('http://localhost:8080/api/1.0/employee-skills', 'GET');
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getEmployeeSkill = async (empId: number) => {
  const request: Request = reqOptions(`http://localhost:8080/api/1.0/employee-skills/${empId}`, 'GET');
  return fetch(request)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    });
};

const createEmployeeSkill = async (data: any) => {
  const options: Request = reqOptions('http://localhost:8080/api/1.0/employee-skills', 'POST', data);
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    });
};

const updateEmployeeSkill = async (data: any, empId: number) => {
  const options: Request = reqOptions(`http://localhost:8080/api/1.0/employee-skills/${empId}`, 'PUT', data);
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    })
};

const deleteEmployeeSkill = async (empId: number) => {
  const options: Request = reqOptions(`http://localhost:8080/api/1.0/employee-skills/${empId}`, 'DELETE');
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    })
};

const employeeSkillService = {
  getEmployeeSkills,
  getEmployeeSkill,
  createEmployeeSkill,
  updateEmployeeSkill,
  deleteEmployeeSkill
};

export default employeeSkillService;