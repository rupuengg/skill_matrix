'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee-skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER
      },
      skill_name: {
        type: Sequelize.STRING
      },
      total_exp_in_year: {
        type: Sequelize.FLOAT
      },
      proficiency: {
        type: Sequelize.STRING
      },
      prior_joining: {
        type: Sequelize.BOOLEAN
      },
      technology_stack_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employee-skills');
  }
};