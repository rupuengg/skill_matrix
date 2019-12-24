const projectSkillDao = require("../dao/projectSkill-dao");

const getProjectSkills = async projectId => {
  const emps = await projectSkillDao.getProjectSkills({
    ProjectId: projectId
  });
  return emps;
};

const getProjectSkillsByEmpID = async projectId => {
  const emps = await projectSkillDao.getProjectSkillsByEmpID({
    ProjectId: projectId
  });
  return emps;
};

const projectSkillService = {
  getProjectSkills,
  getProjectSkillsByEmpID
};

module.exports = projectSkillService;
