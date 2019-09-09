'use strict';

module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  // Associate to other tables
  employee.associate = function (models) {
    employee.hasMany(models.employee_skills, {
      foreignKey: "employee_id",
      as: "employee_id"
    });
  };

  return employee;
};