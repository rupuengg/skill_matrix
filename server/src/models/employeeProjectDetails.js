module.exports = (sequelize, DataTypes) => {
  const EmployeeProjectDetails = sequelize.define(
    "EmployeeProjectDetails",
    {
      EmployeeProjectID: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      EmployeeID: DataTypes.INTEGER,
      ProjectID: {
        type: DataTypes.INTEGER,
        references: "ProjectDetails", // <<< Note, its table's name, not object name
        referencesKey: "ProjectID" // <<< Note, its a column name
      },
      LastModifiedBy: DataTypes.INTEGER,
      CreatedBy: DataTypes.INTEGER,
      IsActive: DataTypes.BOOLEAN
    },
    { freezeTableName: true, timestamps: false }
  );
  EmployeeProjectDetails.associate = function(models) {
    EmployeeProjectDetails.belongsTo(models.ProjectDetails, {
      foreignKey: "ProjectID",
      sourceKey: "ProjectID"
    });
  };
  return EmployeeProjectDetails;
};
