module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define(
    "ProjectDetails",
    {
      ProjectID: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      ProjectName: DataTypes.STRING
    },
    { freezeTableName: true, timestamps: false }
  );
  project.associate = function(models) {
    project.hasOne(models.ProjectSkillMapping, {
      foreignKey: "ProjectID",
      sourceKey: "ProjectID"
    });
    project.belongsTo(models.LookUpMaster, {
      foreignKey: "LookUpClientID",
      targetKey: "LookUpID"
    });
  };
  return project;
};
