const dashboardService = require('../services/dashboard-service');
const { OK, SERVER_ERROR } = require('../constants/httpConstant');

const getDetailsEmployee = async (req, res) => {
  try {
    const emp = await dashboardService.getDetailsEmployee(req);
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
  getDetailsEmployee,
  getEmployeeSkills
};

module.exports = dashboardController;

