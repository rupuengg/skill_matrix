module.exports = (sequelize, DataTypes) => {
  const projectSkill = sequelize.define(
    "ProjectSkillMapping",
    {
      ProjectSkillID: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      ProjectID: DataTypes.INTEGER,
      SkillID: DataTypes.INTEGER,
      LookUpProficiencyID: DataTypes.INTEGER
    },
    { freezeTableName: true, timestamps: false }
  );
  projectSkill.associate = function(models) {
    projectSkill.belongsTo(models.LookUpMaster, {
      foreignKey: "LookUpProficiencyID",
      targetKey: "LookUpID"
    });
    projectSkill.belongsTo(models.ProjectDetails, {
      foreignKey: "ProjectID",
      targetKey: "ProjectID"
    });

    projectSkill.belongsTo(models.skill, {
      foreignKey: "SkillID",
      targetKey: "id"
    });
  };
  return projectSkill;
};
