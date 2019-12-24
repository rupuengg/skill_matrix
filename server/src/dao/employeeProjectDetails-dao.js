const employeeProjectDetailsModel = require("../models").EmployeeProjectDetails;
const employeeSkillsModel = require("../models").employee_skills;

const getProjectsByEmployeeID = async filters => {
  const emps = await employeeProjectDetailsModel.findAll({
    where: filters,
    order: [["EmployeeProjectID", "ASC"]]
  });
  //const emps =filters;
  return emps;
};
const saveEmployeeProjectDetails = async data => {
  //const emp = await employeeProjectDetailsModel.build(data).save();
  //const emp = data;
  const emp = data.map((val, condition) => {
    return employeeSkillsModel
      .findOne({
        where: {
          id: val.employee_skill.id,
          employee_id: val.employee_skill.employee_id
        }
      })
      .then(obj => {
        // update
        if (obj) {
          obj.update(val.employee_skill);
          // insert
        } else {
          employeeSkillsModel.create(val.employee_skill);
        }
        //
      });
    //return val.employee_skill.id;
  });
  //const emp = data;
  return emp;
};

const upsertProjectSkills = async data => {
  const emp = data.map((val, condition) => {
    return projectSkillModel
      .findOne({ where: { ProjectSkillID: val.ProjectSkillID } })
      .then(obj => {
        // update
        if (obj) {
          return obj.update(val);
          // insert
        } else {
          return projectSkillModel.create(val);
        }
        //
      });
  });
  return emp;
};

const employeeProjectDetailsDao = {
  getProjectsByEmployeeID,
  saveEmployeeProjectDetails
};

module.exports = employeeProjectDetailsDao;
