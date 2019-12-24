const projectModel = require("../models").ProjectDetails;
const EmployeeProjectDetailsModel = require("../models").EmployeeProjectDetails;

// const createProject = async data => {
//   const emp = await projectModel.build(data).save();
//   return emp;
// };

const getProjects = async filters => {
  const emps = await projectModel.findAll({
    where: filters,
    order: [["ProjectID", "ASC"]]
  });

  return emps;
};

const getProjectsByID = async filters => {
  const emps = await EmployeeProjectDetailsModel.findAll({
    where: filters,
    order: [["ProjectID", "ASC"]]
  });

  return emps;
};

const projectDao = {
  // createProject,
  getProjects,
  getProjectsByID

// const getDetails = async (filters) => {
//   const emps = await projectModel.findAll({
//     where: filters,
//     order: [['id', 'DESC']]
//   });
//   return emps;
// }
// const getProject = async filters => {
//   const emp = await projectModel.findOne({
//     where: filters
//   });
//   return emp;
// };

// const deleteProject = async filters => {
//   const emp = await projectModel.destroy({
//     where: filters
//   });
//   return emp;
// };

// const updateProject = async (data, filters) => {
//   const emp = await projectModel.update(data, { where: filters });
//   return emp[0];
// };

const projectDao = {
  // createProject,
  getProjects
  // getProject,
  // deleteProject,
  //updateProject
  // getDetails
};

module.exports = projectDao;
