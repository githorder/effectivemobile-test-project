const express = require("express");

const {
  httpGetUserHistory,
} = require("../controllers/user-history.controller");

const userHistoryRouter = express.Router();

userHistoryRouter.get("/", httpGetUserHistory);

module.exports = userHistoryRouter;
