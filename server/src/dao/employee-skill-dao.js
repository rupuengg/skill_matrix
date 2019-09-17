const employeeSkillModel = require('../models').employee_skill;
console.log('employeeSkillModel', employeeSkillModel);

const createEmployeeSkill = async (data) => {
  console.log('ddata', data);
  const emp = await employeeSkillModel.build(data).save();
  console.log(emp);
  return emp;
};

const getEmployeeSkills = async (filters) => {
  const emps = await employeeSkillModel.findAll({
    where: filters,
    order: [['id', 'DESC']]
  });
  return emps;
}

const getEmployeeSkill = async (filters) => {
  const emp = await employeeSkillModel.findOne({
    where: filters
  });
  return emp;
}

const deleteEmployeeSkill = async (filters) => {
  const emp = await employeeSkillModel.destroy({
    where: filters
  });
  return emp;
}

const updateEmployeeSkill = async (data, filters) => {
  const emp = await employeeSkillModel.update(data, { where: filters });
  return emp[0];
};

const employeeSkillDao = {
  createEmployeeSkill,
  getEmployeeSkills,
  getEmployeeSkill,
  deleteEmployeeSkill,
  updateEmployeeSkill
};

module.exports = employeeSkillDao;