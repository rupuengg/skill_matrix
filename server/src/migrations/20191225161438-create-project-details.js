'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProjectDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProjectID: {
        type: Sequelize.INTEGER
      },
      ProjectName: {
        type: Sequelize.STRING
      },
      LookUpClientID: {
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
    return queryInterface.dropTable('ProjectDetails');
  }
};