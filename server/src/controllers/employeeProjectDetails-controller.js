const projectService = require("../services/project-service");
const employeeProjectDetailService = require("../services/employeeProjectDetails-service");
const { OK, SERVER_ERROR } = require("../constants/httpConstant");
const { PROJECT } = require("../constants/msgConstant");

const getProjectsByID = async (req, res) => {
  try {
    const emps = await projectService.getProjectsByID(req.user.id);
    return res.status(OK).json({ data: emps });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const getProjectSkillsByEmpID = async (req, res) => {
  try {
    const emps = await employeeProjectDetailService.getProjectSkillsByEmpID(
      req.params.projectId,
      req.user.id
    );
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const saveEmployeeProjectDetails = async (req, res) => {
  try {
    const emps = await employeeProjectDetailService.saveEmployeeProjectDetails(
      req.body,
      8
    );
    //const emps = req.body;
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};
const employeeProjectDetailsController = {
  getProjectsByID,
  getProjectSkillsByEmpID,
  saveEmployeeProjectDetails
};

module.exports = employeeProjectDetailsController;
