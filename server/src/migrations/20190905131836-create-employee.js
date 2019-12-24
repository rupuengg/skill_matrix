module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employees", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lastModifiedBy: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      total_exp_in_month: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      relevant_exp_in_month: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      designation: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      emp_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("employees");
  }
};
