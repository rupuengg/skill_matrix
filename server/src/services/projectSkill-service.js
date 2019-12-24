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

const upsertProjectSkills = async projectSkills => {
  const emp = await projectSkillDao.upsertProjectSkills(projectSkills);
  // const emp = "pooja";
  return emp;
};

const projectSkillService = {
  getProjectSkills,
  getProjectSkillsByEmpID,
  upsertProjectSkills,
};

module.exports = projectSkillService;
