const userDao = require("../dao/user-dao");
const employeeSkillDao = require("../dao/employee-skill-dao");

const createEmployeeSkill = async data => {
  const emp = await employeeSkillDao.createEmployeeSkill(data);
  return emp;
};

const getEmployeeSkills = async userId => {
  const user = await userDao.getUsers({ id: userId });
  const emps = await employeeSkillDao.getEmployeeSkills({
    employee_id: user.employeeId
  });
  return emps;
};

const getEmployeeSkill = async emp_id => {
  const emps = await employeeSkillDao.getEmployeeSkill({ id: emp_id });
  return emps;
};

const deleteEmployeeSkill = async emp_id => {
  const emps = await employeeSkillDao.deleteEmployeeSkill({ id: emp_id });
  return emps;
};

const updateEmployeeSkill = async (data, emp_id) => {
  const emp = await employeeSkillDao.updateEmployeeSkill(data, { id: emp_id });
  return emp;
};

const employeeSkillService = {
  createEmployeeSkill,
  getEmployeeSkills,
  getEmployeeSkill,
  deleteEmployeeSkill,
  updateEmployeeSkill
};

module.exports = employeeSkillService;
