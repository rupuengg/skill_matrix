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
};

module.exports = projectDao;
