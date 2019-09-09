require('dotenv').config();
module.exports = {
  development: {
    username: "sa",
    password: "bhavana@2019",
    database: "ManageSkills",
    host: "192.168.0.120",
    dialect: "mssql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mssql",
    operatorsAliases: false
  }
};