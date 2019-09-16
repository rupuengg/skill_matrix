import { reqOptions } from '../helpers/common';
// import { OptionInterface } from '../interfaces/option.interface';

const getSkills = async () => {
  const token = localStorage.getItem('token');
  const request: Request = reqOptions('http://localhost:8080/api/1.0/skills', 'GET', token);
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getSkill = async (skillId: number) => {
  const token = localStorage.getItem('token');
  const request: Request = reqOptions(`http://localhost:8080/api/1.0/skills/${skillId}`, 'GET', token);
  return fetch(request)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    });
};

const createSkill = async (data: any) => {
  const token = localStorage.getItem('token');
  const options: Request = reqOptions('http://localhost:8080/api/1.0/skills', 'POST', token, data);
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    });
};

const updateSkill = async (data: any, skillId: number) => {
  const token = localStorage.getItem('token');
  const options: Request = reqOptions(`http://localhost:8080/api/1.0/skills/${skillId}`, 'PUT', token, data);
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    })
};

const deleteSkill = async (skillId: number) => {
  const token = localStorage.getItem('token');
  const options: Request = reqOptions(`http://localhost:8080/api/1.0/skills/${skillId}`, 'DELETE', token);
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log('E Error', err);
    })
};

const skillService = {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill
};

export default skillService;