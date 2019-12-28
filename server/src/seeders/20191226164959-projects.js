module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "project_details",
      [
        {
          project_name: "LQB",
          lookup_client_id: 1,
          lastmodified_on: "2019-12-26 16:44:33",
          lastmodified_by: 1,
          created_on: "2019-12-26 16:44:33",
          created_by: 1,
          is_active: true,
          created_at: "2019-12-26 16:44:33",
          updated_at: "2019-12-26 16:44:33"
        },
        {
          project_name: "LPQ",
          lookup_client_id: 1,
          lastmodified_on: "2019-12-26 16:44:33",
          lastmodified_by: 1,
          created_on: "2019-12-26 16:44:33",
          created_by: 1,
          is_active: true,
          created_at: "2019-12-26 16:44:33",
          updated_at: "2019-12-26 16:44:33"
        },
        {
          project_name: "ML",
          lookup_client_id: 1,
          lastmodified_on: "2019-12-26 16:44:33",
          lastmodified_by: 1,
          created_on: "2019-12-26 16:44:33",
          created_by: 1,
          is_active: true,
          created_at: "2019-12-26 16:44:33",
          updated_at: "2019-12-26 16:44:33"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("project_details", null, {});
  }
};
