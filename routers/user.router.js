const express = require("express");

const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", userController.httpGetAllUsers);
userRouter.post("/", userController.httpCreateUser);
userRouter.put("/:id", userController.httpUpdateUser);

module.exports = userRouter;
