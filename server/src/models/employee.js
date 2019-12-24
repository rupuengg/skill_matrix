module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    "employee",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      createdBy: DataTypes.NUMBER,
      lastModifiedBy: DataTypes.NUMBER,
      total_exp_in_month: DataTypes.NUMBER,
      relevant_exp_in_month: DataTypes.NUMBER,
      designation: DataTypes.STRING,
      emp_id: DataTypes.NUMBER
    },
    { timestamps: true }
  );

  employee.associate = function(models) {
    employee.belongsTo(models.employee_skills, {
      foreignKey: "id",
      sourceKey: "employee_id"
    });
  };

  return employee;
};
