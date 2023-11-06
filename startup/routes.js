const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("../routers/user.router");
const userHistoryRouter = require("../routers/user-history.router");

const error = require("../middlewares/error.middleware");

module.exports = (app) => {
  if (app.get("env") === "development") {
    app.use(morgan("combined"));
  }

  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: "*",
      allowedHeaders: "*",
      methods: "*",
      preflightContinue: true,
    })
  );

  app.use("/users", userRouter);
  app.use("/user-history", userHistoryRouter);

  app.use(error);
};
