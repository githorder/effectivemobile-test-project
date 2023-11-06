const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "project_db",
  "diyorbaynazarov",
  "Universe2000@",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false,
  }
);

module.exports = sequelize;
