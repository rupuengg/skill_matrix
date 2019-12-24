import { reqOptions } from "../helpers/common";
// import { OptionInterface } from '../interfaces/option.interface';

const getProjects = async (clientId: number) => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/projects/${clientId}`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

const getProjectsByEmployeeID = async () => {
  const request: Request = reqOptions(
    `http://localhost:8080/api/1.0/employeeProjectDetails/3`,
    "GET"
  );
  return fetch(request)
    .then((res: any) => res.json())
    .then((res: any) => {
      return res;
    });
};

// const getSkill = async (projectId: number) => {
//   const request: Request = reqOptions(
//     `http://localhost:8080/api/1.0/projects/${projectId}`,
//     "GET"
//   );
//   return fetch(request)
//     .then((res: any) => {
//       return res;
//     })
//     .catch((err: any) => {
//       console.log("E Error", err);
//     });
// };

// const createSkill = async (data: any) => {
//   const options: Request = reqOptions(
//     "http://localhost:8080/api/1.0/projects",
//     "POST",
//     data
//   );
//   return fetch(options)
//     .then((res: any) => {
//       return res;
//     })
//     .catch((err: any) => {
//       console.log("E Error", err);
//     });
// };

// const updateSkill = async (data: any, projectId: number) => {
//   const options: Request = reqOptions(
//     `http://localhost:8080/api/1.0/projects/${projectId}`,
//     "PUT",
//     data
//   );
//   return fetch(options)
//     .then((res: any) => {
//       return res;
//     })
//     .catch((err: any) => {
//       console.log("E Error", err);
//     });
// };

// const deleteSkill = async (projectId: number) => {
//   const options: Request = reqOptions(
//     `http://localhost:8080/api/1.0/projects/${projectId}`,
//     "DELETE"
//   );
//   return fetch(options)
//     .then((res: any) => {
//       return res;
//     })
//     .catch((err: any) => {
//       console.log("E Error", err);
//     });
// };

const projectService = {
  getProjects,
  getProjectsByEmployeeID,
  // getSkill,
  // createSkill,
  // updateSkill,
  // deleteSkill
};

export default projectService;
