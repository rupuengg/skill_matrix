'use strict';
module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define('skill', {
    skill_name: DataTypes.STRING
  }, {});

  skill.associate = function (models) {
    // associations can be defined here
  };

  return skill;
};