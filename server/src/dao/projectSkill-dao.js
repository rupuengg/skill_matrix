const sequelize = require("sequelize");
const skillModel = require("../models").skill;
const projectSkillModel = require("../models").ProjectSkillMapping;
const employeeSkillsModel = require("../models").employee_skills;
//const lookUpMasterModel = require("../models").LookUpMaster;

// const getProjectSkills = async filters => {
//   const emps = await projectSkillModel.findAll({
//     where: filters,
//     order: [["ProjectSkillID", "DESC"]]
//     // include: [
//     //   {
//     //     model: lookUpMasterModel,
//     //     on: {
//     //       LookUpID: {
//     //         [sequelize.Op.eq]: sequelize.col(
//     //           "ProjectSkillMapping.LookUpProficiencyID"
//     //         )
//     //       }
//     //     }
//     //   }
//     // ]
//   });
//   return emps;
// };

const getProjectSkills = async filters => {
  const emps = await skillModel.findAll({
    order: [["id", "ASC"]],
    include: [
      {
        model: projectSkillModel,
        on: {
          SkillID: {
            [sequelize.Op.eq]: sequelize.col("skill.id")
          },
          ProjectId: filters.ProjectId
        }
      }
    ]
  });
  return emps;
};
const getProjectSkillsByEmpID = async filters => {
  const emps = await skillModel.findAll({
    order: [["id", "ASC"]],
    include: [
      {
        model: projectSkillModel,
        on: {
          SkillID: {
            [sequelize.Op.eq]: sequelize.col("skill.id")
          },
          ProjectId: filters.ProjectId
        }
      },
      {
        model: employeeSkillsModel,
        //required: true,
        on: {
          skill_id: {
            [sequelize.Op.eq]: sequelize.col("skill.id")
          },
          employee_id: filters.empID
        }
      }
    ]
  });

  return emps;
};

const projectSkillDao = {
  getProjectSkills,
  getProjectSkillsByEmpID
};

module.exports = projectSkillDao;
