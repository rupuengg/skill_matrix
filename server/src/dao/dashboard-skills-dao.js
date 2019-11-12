const employeeModel = require('../models').employee;

const getEmployee = async (filters = {}) => {
  const emp = await employeeModel.findAll({
    where: filters,
    order: [['id', 'DESC']]
  });
 return emp;
}
const dashboardSkillDao = {
  getEmployee,
};
module.exports = dashboardSkillDao;
