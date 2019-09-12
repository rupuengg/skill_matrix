const employeeDao = require('../dao/employee-dao');

const createEmployee = async (data) => {
  const emp = await employeeDao.createEmployee(data);
  return emp;
};

const getEmployees = async (filters) => {
  const emps = await employeeDao.getEmployees(filters);
  return emps;
};

const getEmployee = async (emp_id) => {
  const emps = await employeeDao.getEmployee({ id: emp_id });
  return emps;
};

const deleteEmployee = async (emp_id) => {
  const emps = await employeeDao.deleteEmployee({ id: emp_id });
  return emps;
};

const updateEmployee = async (data, emp_id) => {
  const emp = await employeeDao.updateEmployee(data, { id: emp_id });
  return emp;
};

const employeeService = {
  createEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
  updateEmployee
};

module.exports = employeeService;