const { DataTypes } = require("sequelize");

const sequelize = require("../startup/db");

const UserHistory = sequelize.define("userHistory", {
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

const getUserHistory = async () => {
  try {
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { UserHistory, getUserHistory };
