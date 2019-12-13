module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      employeeId: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      profile_pic: DataTypes.STRING,
      user_type: DataTypes.INTEGER,
      IsActive: DataTypes.BOOLEAN
    },
    {}
  );

  // Associate to other tables
  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(models.employee, {
      foreignKey: "id"
    });
  };

  return user;
};
