import { reqOptions } from "../helpers/common";

const getProjectSkills = async (projectId: number) => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/projectSkill/${projectId}`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getProjectSkillsByEmployeeID = async (projectId: number) => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/employeeProjectDetails/${projectId}`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const saveEmployeeProjectDetails = async (data: any) => {
  debugger;
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/employeeProjectDetails/`,
    "POST",
    data
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
  };
  
const upsertProjectSkills = async (projectSkills: any) => {
  debugger;
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/projectSkill`,
    "POST",
    projectSkills
  );
  return fetch(request).then((res: any) => {
    return res;
  });
};

const projectSkillService = {
  getProjectSkills,
  getProjectSkillsByEmployeeID,
  saveEmployeeProjectDetails,
  upsertProjectSkills,
};

export default projectSkillService;
