const { DataTypes } = require("sequelize");

const sequelize = require("../startup/db");

const UserHistory = sequelize.define("UserHistory", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  event: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = UserHistory;
