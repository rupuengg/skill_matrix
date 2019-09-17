module.exports = (sequelize, DataTypes) => {
  const employee_skills = sequelize.define('employee_skills', {
    employee_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER,
    skill_version: DataTypes.STRING,
    exp_in_month: DataTypes.STRING,
    last_used: DataTypes.BOOLEAN
  }, {});

  employee_skills.associate = function (models) {
    employee_skills.hasMany(models.employee, {
      foreignKey: "id",
      targetKey: "employee_id"
    });
    employee_skills.hasMany(models.skill, {
      foreignKey: "id",
      targetKey: "skill_id"
    });
  };

  return employee_skills;
};