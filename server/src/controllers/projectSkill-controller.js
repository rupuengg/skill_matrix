const projectSkillService = require("../services/projectSkill-service");
const { OK, SERVER_ERROR } = require("../constants/httpConstant");

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

const projectSkillController = {
  getProjectSkills,
  getProjectSkillsByEmpID
};

module.exports = projectSkillController;
