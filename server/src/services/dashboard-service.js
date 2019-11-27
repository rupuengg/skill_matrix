const dashboardSkillDao = require('../dao/dashboard-skills-dao');
const employeeSkillDao = require('../dao/employee-skill-dao');

const getDetailsEmployee = async () => {
  const emps = await dashboardSkillDao.getDetailsEmployee();
  const emp_skill = await employeeSkillDao.getSkills({});
  const newEmps = emps.map(emp => {
    const tmp = {
      emp_id: emp.id,
      emp_first_name: emp.first_name,
      emp_last_name: emp.last_name,
      sk1: []
    };
    emp_skill.forEach(element => {
      if (emp.id === element.employee_id && element.skill.skill_name) {
        tmp.sk1.push(element.skill.skill_name)
      }
    });
    return tmp;
  });
  return {
    newEmps: newEmps,
  }
}
const dashboardService = {
  getDetailsEmployee,
};
module.exports = dashboardService;