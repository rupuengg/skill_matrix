const sequelize = require("sequelize");
const skillModel = require("../models").skill;
const projectSkillModel = require("../models").ProjectSkillMapping;

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

const upsertProjectSkills = async data => {
  const skillIds = data.map((val, condition) => {
    return val.SkillID;
  });

  await projectSkillModel.destroy({
    where: {
      ProjectSkillID: { [sequelize.Op.notIn]: skillIds },
      ProjectID: data[0].ProjectID
    }
  });

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

function upsert(values, condition) {
  return projectSkillModel.findOne({ where: condition }).then(function(obj) {
    // update
    if (obj) {
      //return;
      console.log("123");
      // obj.update(values);
      // insert
    } else {
      console.log("456");
    }
    // Model.create(values);
  });
}

const projectSkillDao = {
  getProjectSkills,
  upsertProjectSkills
};

module.exports = projectSkillDao;
