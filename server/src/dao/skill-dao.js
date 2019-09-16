const skillModel = require('../models').skill;

const createSkill = async (data) => {
  const emp = await skillModel.build(data).save();
  return emp;
};

const getSkills = async (filters) => {
  const emps = await skillModel.findAll({
    where: filters,
    order: [['id', 'DESC']]
  });
  return emps;
}

const getSkill = async (filters) => {
  const emp = await skillModel.findOne({
    where: filters
  });
  return emp;
}

const deleteSkill = async (filters) => {
  const emp = await skillModel.destroy({
    where: filters
  });
  return emp;
}

const updateSkill = async (data, filters) => {
  const emp = await skillModel.update(data, { where: filters });
  return emp[0];
};

const employeeDao = {
  createSkill,
  getSkills,
  getSkill,
  deleteSkill,
  updateSkill
};

module.exports = employeeDao;