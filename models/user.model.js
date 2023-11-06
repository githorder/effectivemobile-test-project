const { DataTypes } = require("sequelize");

const { UserHistory } = require("./user-history.model");
const sequelize = require("../startup/db");
const { events } = require("../enums/user-history.enums");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gender: { type: DataTypes.ENUM("male", "female"), allowNull: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

const getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (err) {
    throw new Error(err);
  }
};

const createUser = async (user) => {
  try {
    return await User.create(user);
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (id, data) => {
  try {
    await User.update(data, { where: { id }, individualHooks: true });
    return await User.findByPk(id);
  } catch (err) {
    throw new Error(err);
  }
};

User.afterCreate(async (user) => {
  try {
    await UserHistory.create({ userId: user.id, event: events.CREATED });
  } catch (err) {
    throw new Error(err);
  }
});

User.afterUpdate(async (user) => {
  try {
    await UserHistory.create({ userId: user.id, event: events.UPDATED });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = { getAllUsers, updateUser, createUser, User };
