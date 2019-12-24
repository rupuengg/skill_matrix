import { reqOptions } from "../helpers/common";
// import { OptionInterface } from '../interfaces/option.interface';

const getSkills = async () => {
  debugger;
  const request: Request = reqOptions(
    "http://localhost:8080/api/1.0/skills",
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getSkill = async (skillId: number) => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/skills/${skillId}`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

const createSkill = async (data: any) => {
  const options: Request = reqOptions(
    "http://localhost:8080/api/1.0/skills",
    "POST",
    data
  );
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

const updateSkill = async (data: any, skillId: number) => {
  const options: Request = reqOptions(
    `http://localhost:8080/api/1.0/skills/${skillId}`,
    "PUT",
    data
  );
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

const deleteSkill = async (skillId: number) => {
  const options: Request = reqOptions(
    `http://localhost:8080/api/1.0/skills/${skillId}`,
    "DELETE"
  );
  return fetch(options)
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      console.log("E Error", err);
    });
};

const skillService = {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill
};

export default skillService;
