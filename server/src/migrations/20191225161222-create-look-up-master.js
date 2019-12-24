module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("LookUpMasters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LookUpID: {
        type: Sequelize.INTEGER
      },
      Type: {
        type: Sequelize.STRING
      },
      Value: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("LookUpMasters");
  }
};
