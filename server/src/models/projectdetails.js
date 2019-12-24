'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectDetails = sequelize.define('ProjectDetails', {
    ProjectID: DataTypes.INTEGER,
    ProjectName: DataTypes.STRING,
    LookUpClientID: DataTypes.INTEGER,
    LastModifiedOn: DataTypes.DATE,
    LastModifiedBy: DataTypes.INTEGER,
    CreatedOn: DataTypes.DATE,
    CreatedBy: DataTypes.INTEGER,
    IsActive: DataTypes.BOOLEAN
  }, {});
  ProjectDetails.associate = function(models) {
    // associations can be defined here
  };
  return ProjectDetails;
};