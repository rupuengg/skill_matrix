module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("EmployeeProjectDetails", {
      EmployeeProjectID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ProjectID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      LastModifiedOn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      LastModifiedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CreatedOn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      CreatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      IsActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("EmployeeProjectDetails");
  }
};
