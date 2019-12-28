const db = require("../models");
const Sequelize = require("sequelize");
const projectDao = require("../dao/project-dao");
const userDao = require("../dao/user-dao");

// const createSkill = async (data) => {
//   const emp = await projectDao.createSkill(data);
//   return emp;
// };

const getProjects = async clientId => {
  const projects = await projectDao.getProjects({ lookup_client_id: clientId });
  return projects;
};

const getProjectsByID = async employeeId => {
  const user = await userDao.getUsers({ id: employeeId });
  return await db.sequelize.query(
    `
    select pd.ProjectName From EmployeeProjectDetails epd 
    left join ProjectDetails pd on pd.ProjectID = epd.ProjectID 
    where EmployeeID = ${user.employeeId}`,
    {
      type: Sequelize.QueryTypes.SELECT
    }
  );
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
  getProjects,
  getProjectsByID
  // getSkill,
  // deleteSkill,
  // updateSkill
};

module.exports = projectService;
