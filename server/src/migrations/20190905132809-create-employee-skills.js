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
      skill_id: {
        type: Sequelize.INTEGER
      },
      skill_version: {
        type: Sequelize.STRING
      },
      exp_in_month: {
        type: Sequelize.STRING
      },
      last_used: {
        type: Sequelize.STRING
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