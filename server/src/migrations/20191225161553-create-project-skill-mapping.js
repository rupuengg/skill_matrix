'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectSkillMappings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProjectSkillID: {
        type: Sequelize.INTEGER
      },
      ProjectID: {
        type: Sequelize.INTEGER
      },
      SkillID: {
        type: Sequelize.INTEGER
      },
      LookUpProficiencyID: {
        type: Sequelize.INTEGER
      },
      LastModifiedOn: {
        type: Sequelize.DATE
      },
      LastModifiedBy: {
        type: Sequelize.INTEGER
      },
      CreatedOn: {
        type: Sequelize.DATE
      },
      CreatedBy: {
        type: Sequelize.INTEGER
      },
      IsActive: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('ProjectSkillMappings');
  }
};