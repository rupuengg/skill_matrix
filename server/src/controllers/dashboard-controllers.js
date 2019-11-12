const dashboardService = require('../services/dashboard-service');
const { OK, SERVER_ERROR } = require('../constants/httpConstant');

const getEmployee = async (req, res) => {
  try {
    const emp = await dashboardService.getEmployee(req);
    return res.status(OK).json(emp);
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};
const getEmployeeSkills = async (req, res) => {
  try {
    const emps = await dashboardService.getEmployeeSkills(req);
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const dashboardController = {
  getEmployee,
  getEmployeeSkills
};

module.exports = dashboardController;

