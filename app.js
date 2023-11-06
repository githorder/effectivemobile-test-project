const express = require("express");

const { User } = require("./models/user.model");
const { UserHistory } = require("./models/user-history.model");

const app = express();

require("./startup/routes")(app);

User.hasMany(UserHistory);
UserHistory.belongsTo(User);

module.exports = app;
