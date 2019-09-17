module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define('skill', {
    skill_name: DataTypes.STRING
  }, {});

  skill.associate = function (models) {
    skill.belongsTo(models.employee_skills, {
      foreignKey: "id",
      sourceKey: "skill_id"
    });
  };

  return skill;
};