import projectService from "../services/project-service";
import { SPINNER_SHOW, SPINNER_HIDE } from "../actiontypes/spinner";
import { PROJECT_LIST, PROJECT_NO_DATA } from "../actiontypes/project";

export const getProjects = (clientId: number) => async (dispatch: any) => {
  dispatch({ type: SPINNER_SHOW });
  await projectService.getProjects(clientId).then(res => {
    if (res.data.length > 0) {
      dispatch({
        type: PROJECT_LIST,
        payload: res.data
      });
    } else {
      dispatch({
        type: PROJECT_NO_DATA,
        payload: res
      });
    }
    dispatch({ type: SPINNER_HIDE });
  });
};

// export const getProject = (empId: number) => async (dispatch: any) => {
//   await projectService.getProject(empId).then(res => {
//     if (res.status === 200) {
//       res.json().then((result: any) => {
//         dispatch({
//           type: PROJECT_EDIT,
//           payload: result
//         });
//       });
//     }
//   });
// };

// export const createProject = (data: any) => async (dispatch: any) => {
//   dispatch({ type: SPINNER_SHOW });
//   await projectService
//     .createProject(data)
//     .then(res => {
//       if (res.status === 200) {
//         res.json().then((result: any) => {
//           dispatch({
//             type: PROJECT_ADD,
//             payload: result.status
//           });
//           history.push("/projects");
//           dispatch({ type: FLASH_SHOW, payload: result.status });
//           setTimeout(() => {
//             dispatch({ type: FLASH_HIDE, payload: "" });
//           }, 3000);
//         });
//       }
//       dispatch({ type: SPINNER_HIDE });
//     })
//     .catch(err => {
//       console.log();
//     });
// };

// export const editProject = (empId: number) => (dispatch: any) => {
//   dispatch({
//     type: PROJECT_EDIT,
//     EMP_ID: empId
//   });
// };

// export const updateProject = (data: any, empId: number) => async (
//   dispatch: any
// ) => {
//   dispatch({ type: SPINNER_SHOW });
//   await projectService
//     .updateProject(data, empId)
//     .then(res => {
//       if (res.status === 200) {
//         res.json().then((result: any) => {
//           dispatch({
//             type: PROJECT_EDIT,
//             payload: result.status
//           });
//           history.push("/projects");
//           dispatch({ type: FLASH_SHOW, payload: result.status });
//           setTimeout(() => {
//             dispatch({ type: FLASH_HIDE, payload: "" });
//           }, 3000);
//         });
//       }
//       dispatch({ type: SPINNER_HIDE });
//     })
//     .catch(err => {
//       console.log();
//     });
// };

// export const deleteProject = (projectId: number) => async (dispatch: any) => {
//   dispatch({ type: SPINNER_SHOW });
//   await projectService
//     .deleteProject(projectId)
//     .then(res => {
//       if (res.status === 200) {
//         res.json().then((result: any) => {
//           dispatch({
//             type: PROJECT_DELETE,
//             payload: {
//               status: result.status,
//               deleteId: result.data
//             }
//           });
//           dispatch({ type: FLASH_SHOW, payload: result.status });
//           setTimeout(() => {
//             dispatch({ type: FLASH_HIDE, payload: "" });
//           }, 3000);
//         });
//       }
//       dispatch({ type: SPINNER_HIDE });
//     })
//     .catch(err => {
//       console.log();
//     });
// };
