module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});

  employee.associate = function (models) {
    employee.belongsTo(models.employee_skills, {
      foreignKey: "id",
      sourceKey: "employee_id"
    });  
  };

  return employee;
};