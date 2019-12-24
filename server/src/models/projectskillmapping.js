'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectSkillMapping = sequelize.define('ProjectSkillMapping', {
    ProjectSkillID: DataTypes.INTEGER,
    ProjectID: DataTypes.INTEGER,
    SkillID: DataTypes.INTEGER,
    LookUpProficiencyID: DataTypes.INTEGER,
    LastModifiedOn: DataTypes.DATE,
    LastModifiedBy: DataTypes.INTEGER,
    CreatedOn: DataTypes.DATE,
    CreatedBy: DataTypes.INTEGER,
    IsActive: DataTypes.BOOLEAN
  }, {});
  ProjectSkillMapping.associate = function(models) {
    // associations can be defined here
  };
  return ProjectSkillMapping;
};