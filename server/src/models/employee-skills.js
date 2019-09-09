'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee_skills = sequelize.define('employee_skills', {
    employee_id: DataTypes.INTEGER,
    skill_name: DataTypes.STRING,
    total_exp_in_year: DataTypes.FLOAT,
    proficiency: DataTypes.STRING,
    prior_joining: DataTypes.BOOLEAN,
    technology_stack_id: DataTypes.INTEGER
  }, {});

  employee_skills.associate = function (models) {
    employee_skills.belongsTo(models.employee, {
      foreignKey: "id",
      foreignKeyConstraint: true
    });

    employee_skills.belongsTo(models.technology_stacks, {
      foreignKey: "id",
      foreignKeyConstraint: true
    });
  };

  return employee_skills;
};