module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define('skill', {
    skill_name: DataTypes.STRING
  }, {});

  skill.associate = function (models) {
    skill.hasOne(models.employee_skills, {
      foreignKey: "skill_id",
      sourceKey: "id"
    });
  };

  return skill;
};