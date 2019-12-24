const projectService = require("../services/project-service");
const { OK, SERVER_ERROR } = require("../constants/httpConstant");
const { PROJECT } = require("../constants/msgConstant");

// const createProject = async (req, res) => {
//   try {
//     const emp = await projectService.createProject(req.body);
//     return res.status(OK).json({ status: PROJECT.CREATED, data: emp });
//   } catch (err) {
//     return res.status(err.status || SERVER_ERROR).json(err);
//   }
// };

const getProjects = async (req, res) => {
  debugger;
  try {
    const emps = await projectService.getProjects(req.params.clientId);
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

// const getProjectAll = async (req, res) => {
//   try {
//     const emps = await projectService.getProjects();
//     return res.status(OK).json({ data: emps });
//   } catch (err) {
//     res.status(err.status || SERVER_ERROR).json(err);
//   }
// };

// const getProject = async (req, res) => {
//   try {
//     const emp = await projectService.getProject(req.params.id);
//     return res.status(OK).json(emp);
//   } catch (err) {
//     res.status(err.status || SERVER_ERROR).json(err);
//   }
// };

// const deleteProject = async (req, res) => {
//   try {
//     const emp = await projectService.deleteProject(req.params.id);
//     return res
//       .status(OK)
//       .json({ status: PROJECT.DELETED, data: req.params.id });
//   } catch (err) {
//     res.status(err.status || SERVER_ERROR).json(err);
//   }
// };

// const updateProject = async (req, res) => {
//   try {
//     const emp = await projectService.updateProject(req.body, req.params.id);
//     return res.status(OK).json({ status: PROJECT.UPDATED, data: emp });
//   } catch (err) {
//     return res.status(err.status || SERVER_ERROR).json(err);
//   }
// };

const projectController = {
  //createProject,
  getProjects
  //getProject,
  //deleteProject,
  // updateProject
};

module.exports = projectController;
