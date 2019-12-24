module.exports = (sequelize, DataTypes) => {
  const lookUpMaster = sequelize.define(
    "LookUpMaster",
    {
      LookUpID: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Type: DataTypes.STRING,
      Value: DataTypes.STRING
    },
    { freezeTableName: true, timestamps: false }
  );
  lookUpMaster.associate = function(models) {
    lookUpMaster.hasOne(models.ProjectDetails, {
      foreignKey: "LookUpClientID",
      sourceKey: "LookUpID"
    });
    lookUpMaster.hasOne(models.employee_skills, {
      foreignKey: "ProficiencyID",
      sourceKey: "LookUpID"
    });
  };
  return lookUpMaster;
};
