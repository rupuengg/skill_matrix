const sequelize = require('sequelize');
const employeeSkillModel = require('../models').employee_skills;
const skillModel = require('../models').skill;

const createEmployeeSkill = async (data) => {
  const emp = await employeeSkillModel.build(data).save();
  return emp;
};

const getEmployeeSkills = async (filters) => {
  const emps = await employeeSkillModel.findAll({
    where: filters,
    order: [['id', 'DESC']],
    include: [{
      model: skillModel,
      on: {
        'id': { [sequelize.Op.eq]: sequelize.col('employee_skills.skill_id') },
      }
    }]
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