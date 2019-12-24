module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("employee_skills", {
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
      },
      ProficiencyID: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      CreatedBy: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      LastModifiedBy: {
        allowNull: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("employee_skills");
  }
};
