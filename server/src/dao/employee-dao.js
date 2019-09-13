const employeeModel = require('../models').employee;

const createEmployee = async (data) => {
  const emp = await employeeModel.build(data).save();
  return emp;
};

const getEmployees = async (filters) => {
  const emps = await employeeModel.findAll({});
  return emps;
}

const getEmployee = async (filters) => {
  const emp = await employeeModel.findOne({
    where: filters
  });
  return emp;
}

const deleteEmployee = async (filters) => {
  const emp = await employeeModel.destroy({
    where: filters
  });
  return emp;
}

const updateEmployee = async (data, filters) => {
  const emp = await employeeModel.update(data, { where: filters });
  return emp[0];
};

const employeeDao = {
  createEmployee,
  getEmployees,
  getEmployee,
  deleteEmployee,
  updateEmployee
};

module.exports = employeeDao;