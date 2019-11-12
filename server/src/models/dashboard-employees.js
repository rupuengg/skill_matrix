//Dashboard-Models

module.exports = (sequelize, DataTypes) => {
  const dashboard_employee = sequelize.define('dashboard_employee ', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    skill_name: DataTypes.STRING
  }, {});
  dashboard_employee.associate = function (models) {
    dashboard_employee.belongsTo(models.employee, {
      foreignKey: "id",
      sourceKey: "employee_id"
    });  
  };
 return dashboard_employee ;
};

