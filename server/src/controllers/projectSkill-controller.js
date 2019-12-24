const projectSkillService = require("../services/projectSkill-service");
const { OK, SERVER_ERROR } = require("../constants/httpConstant");
const { PROJECTSKILL } = require("../constants/msgConstant");

const getProjectSkills = async (req, res) => {
  try {
    const emps = await projectSkillService.getProjectSkills(
      req.params.projectId
    );
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const getProjectSkillsByEmpID = async (req, res) => {
  try {
    const emps = await projectSkillService.getProjectSkillsByEmpID(
      req.params.projectId
    );
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const upsertProjectSkills = async (req, res) => {
  try {
    const emp = await projectSkillService.upsertProjectSkills(req.body);
    // const emp = "Pooja";
    return res.status(OK).json({ status: PROJECTSKILL.SAVED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const projectSkillController = {
  getProjectSkills,
  getProjectSkillsByEmpID,
  upsertProjectSkills,
};

module.exports = projectSkillController;
