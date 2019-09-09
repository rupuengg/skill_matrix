'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  }, {});

  // Associate to other tables
  user.associate = function (models) {
    // associations can be defined here
    //   User.hasMany(models.user_profiles, {
    //     foreignKey: 'user_id'
    //   });
  };

  return user;
};