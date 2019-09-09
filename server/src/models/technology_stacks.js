'use strict';
module.exports = (sequelize, DataTypes) => {
  const technology_stacks = sequelize.define('technology_stacks', {
    name: DataTypes.STRING
  }, {});

  technology_stacks.associate = function (models) {
    technology_stacks.hasMany(models.employee_skills, {
      foreignKey: "technology_stack_id",
      foreignKeyConstraint: true
    });
  };

  return technology_stacks;
};