module.exports = (sequelize, DataTypes) => {
  const ProjectDetails = sequelize.define(
    "project_details",
    {
      project_name: DataTypes.STRING,
      lookup_client_id: DataTypes.INTEGER,
      lastmodified_on: DataTypes.DATE,
      lastmodified_by: DataTypes.INTEGER,
      created_on: DataTypes.DATE,
      created_by: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    },
    { freezeTableName: true, timestamps: false }
  );
  ProjectDetails.associate = function(models) {
    // associations can be defined here
  };
  return ProjectDetails;
};
