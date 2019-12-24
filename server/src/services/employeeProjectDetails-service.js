const projectSkillDao = require("../dao/projectSkill-dao");
const employeeProjectDetailsDao = require("../dao/employeeProjectDetails-dao");
const userDao = require("../dao/user-dao");

const getProjectSkillsByEmpID = async (projectId, userId) => {
  const user = await userDao.getUsers({ id: userId });
  const emps = await projectSkillDao.getProjectSkillsByEmpID({
    ProjectId: projectId,
    empID: user.employeeId
  });
  return emps;
};

const saveEmployeeProjectDetails = async (data, userId) => {
  data.map(d => {
    d.employee_skill.employee_id = userId;
  });
  //const emp = data;
  const emp = await employeeProjectDetailsDao.saveEmployeeProjectDetails(data);
  //const emp = userId;
  // await userDao.createUser({
  //   ...data,
  //   employeeId: emp.id,
  //   password: password,
  //   user_type: "user"
  // });
  return emp;
};

const employeeProjectDetailsService = {
  getProjectSkillsByEmpID,
  saveEmployeeProjectDetails
};

module.exports = employeeProjectDetailsService;
