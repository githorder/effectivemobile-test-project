const express = require("express");
const { query } = require("express-validator");

const {
  httpGetUserHistory,
} = require("../controllers/user-history.controller");

const userHistoryRouter = express.Router();

userHistoryRouter.get(
  "/",
  [
    query("id").notEmpty().escape(),
    query("page").escape(),
    query("limit").escape(),
  ],
  httpGetUserHistory
);

module.exports = userHistoryRouter;
