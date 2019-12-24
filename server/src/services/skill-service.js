const skillDao = require("../dao/skill-dao");

const createSkill = async data => {
  const emp = await skillDao.createSkill(data);
  return emp;
};

const getSkills = async filters => {
  const emps = await skillDao.getSkills(filters);
  return emps;
};

const getSkill = async emp_id => {
  const emps = await skillDao.getSkill({ id: emp_id });
  return emps;
};

const deleteSkill = async emp_id => {
  const emps = await skillDao.deleteSkill({ id: emp_id });
  return emps;
};

const updateSkill = async (data, emp_id) => {
  const emp = await skillDao.updateSkill(data, { id: emp_id });
  return emp;
};

const skillService = {
  createSkill,
  getSkills,
  getSkill,
  deleteSkill,
  updateSkill
};

module.exports = skillService;
