const projectSkillDao = require("../dao/projectSkill-dao");

const getProjectSkills = async projectId => {
  const emps = await projectSkillDao.getProjectSkills({
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
  upsertProjectSkills
};

module.exports = projectSkillService;
