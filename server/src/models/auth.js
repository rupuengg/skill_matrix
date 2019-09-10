
module.exports = (sequelize, DataTypes) => {
  const auth = sequelize.define('auth', {
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {});
  auth.associate = function (models) {
    // associations can be defined here
    auth.belongsTo(models.user, {
      foreignKey: "user_id",
      foreignKeyConstraint: true
    });
  };
  return auth;
};