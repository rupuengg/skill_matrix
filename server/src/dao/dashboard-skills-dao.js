const employeeModel = require('../models').employee;

const getDetailsEmployee = async (filters = {}) => {
  const emp = await employeeModel.findAll({
    where: filters,
    order: [['id', 'DESC']]
  });
 return emp;
}
const dashboardSkillDao = {
  getDetailsEmployee,
};
module.exports = dashboardSkillDao;
