module.exports = (sequelize, DataTypes) => {
  const employee_skills = sequelize.define(
    "employee_skills",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employee_id: DataTypes.INTEGER,
      skill_id: DataTypes.INTEGER,
      skill_version: DataTypes.STRING,
      exp_in_month: DataTypes.STRING,
      last_used: DataTypes.BOOLEAN,
      //ProficiencyID: DataTypes.INTEGER
      ProficiencyID: {
        type: DataTypes.INTEGER,
        references: "LookUpMaster", // <<< Note, its table's name, not object name
        referencesKey: "LookUpID" // <<< Note, its a column name
      },
      CreatedBy: DataTypes.INTEGER,
      LastModifiedBy: DataTypes.INTEGER
    },
    {}
  );

  employee_skills.associate = function(models) {
    employee_skills.hasMany(models.employee, {
      foreignKey: "id",
      targetKey: "employee_id"
    });
    employee_skills.belongsTo(models.skill, {
      foreignKey: "skill_id",
      targetKey: "id"
    });
    employee_skills.hasMany(models.LookUpMaster, {
      foreignKey: "LookUpID",
      targetKey: "ProficiencyID"
    });
    employee_skills.hasMany(models.ProjectSkillMapping, {
      foreignKey: "SkillID",
      targetKey: "skill_id"
    });
  };

  return employee_skills;
};
