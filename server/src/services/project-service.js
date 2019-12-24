const projectDao = require("../dao/project-dao");

// const createSkill = async (data) => {
//   const emp = await projectDao.createSkill(data);
//   return emp;
// };

const getProjects = async clientId => {
  const projects = await projectDao.getProjects({ LookUpClientID: clientId });
  return projects;
};

// const getSkill = async (emp_id) => {
//   const emps = await skillDao.getSkill({ id: emp_id });
//   return emps;
// };

// const deleteSkill = async (emp_id) => {
//   const emps = await skillDao.deleteSkill({ id: emp_id });
//   return emps;
// };

// const updateSkill = async (data, emp_id) => {
//   const emp = await skillDao.updateSkill(data, { id: emp_id });
//   return emp;
// };

const projectService = {
  // createSkill,
  getProjects
  // getSkill,
  // deleteSkill,
  // updateSkill
};

module.exports = projectService;
