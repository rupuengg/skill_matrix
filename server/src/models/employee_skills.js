module.exports = (sequelize, DataTypes) => {
  const employee_skill = sequelize.define('employee_skills', {
    employee_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER,
    skill_version: DataTypes.FLOAT,
    exp_in_month: DataTypes.STRING,
    last_used: DataTypes.BOOLEAN
  }, {});

  employee_skill.associate = function (models) {
    employee_skill.hasMany(models.employee, {
      foreignKey: "id",
      targetKey: "employee_id"
    });
    employee_skill.hasMany(models.skill, {
      foreignKey: "id",
      targetKey: "skill_id"
    });
  };

  return employee_skill;
};