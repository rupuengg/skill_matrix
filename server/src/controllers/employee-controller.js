const employeeService = require('../services/employee-service');
const { OK, SERVER_ERROR } = require('../constants/httpConstant');
const { EMPLOYEE } = require('../constants/msgConstant');

const createEmployee = async (req, res) => {
  try {
    const emp = await employeeService.createEmployee(req.body);
    return res.status(OK).json({ status: EMPLOYEE.CREATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const getEmployees = async (req, res) => {
  try {
    const emps = await employeeService.getEmployees();
    return res.status(OK).json({ data: emps });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const getEmployee = async (req, res) => {
  try {
    const emp = await employeeService.getEmployee(req.params.id);
    return res.status(OK).json(emp);
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const emp = await employeeService.deleteEmployee(req.params.id);
    return res.status(OK).json(emp);
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const emp = await employeeService.updateEmployee(req.body, req.params.id);
    return res.status(OK).json({ status: EMPLOYEE.UPDATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const employeeController = {
  createEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
  updateEmployee
};

module.exports = employeeController;