const employeeSkillService = require('../services/employee-skill-service');
const { OK, SERVER_ERROR } = require('../constants/httpConstant');
const { EMPLOYEE_SKILL } = require('../constants/msgConstant');

const createEmployeeSkill = async (req, res) => {
  try {
    const emp = await employeeSkillService.createEmployeeSkill(req.body);
    return res.status(OK).json({ status: EMPLOYEE_SKILL.CREATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const getEmployeeSkills = async (req, res) => {
  try {
    const emps = await employeeSkillService.getEmployeeSkills(req.user.id);
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const getEmployeeSkill = async (req, res) => {
  try {
    const emp = await employeeSkillService.getEmployeeSkill(req.params.id);
    return res.status(OK).json(emp);
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const deleteEmployeeSkill = async (req, res) => {
  try {
    await employeeSkillService.deleteEmployeeSkill(req.params.id);
    return res.status(OK).json({ status: EMPLOYEE_SKILL.DELETED, data: req.params.id });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const updateEmployeeSkill = async (req, res) => {
  try {
    const emp = await employeeSkillService.updateEmployeeSkill(req.body, req.params.id);
    return res.status(OK).json({ status: EMPLOYEE_SKILL.UPDATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const employeeSkillController = {
  createEmployeeSkill,
  getEmployeeSkills,
  getEmployeeSkill,
  deleteEmployeeSkill,
  updateEmployeeSkill
};

module.exports = employeeSkillController;