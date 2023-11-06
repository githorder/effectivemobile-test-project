const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../models/user.model");

const httpGetAllUsers = async (_, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    next(err);
  }
};

const httpCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, age, gender, email, password } = req.body;

    if (firstName && typeof req.body?.firstName === "string") {
      const newUser = await createUser({
        firstName,
        lastName,
        age,
        gender,
        email,
        password,
      });
      res.status(201).json(newUser);
      return;
    }

    res.status(400).json({ error: "Incorrect data" });
  } catch (err) {
    next(err);
  }
};

const httpUpdateUser = async (req, res, next) => {
  const id = Number(req.params?.id);
  try {
    if (req.body && id) {
      const updatedUser = await updateUser(id, req.body);
      res.status(200).json(updatedUser);
      return;
    }

    res
      .status(400)
      .json({ error: true, message: "Invalid or empty data values" });
  } catch (err) {
    next(err);
  }
};

const httpDeleteUser = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const deletedUser = await deleteUser(id);

    if (deletedUser) {
      res.status(200).json(deletedUser);
      return;
    } else {
      res.status(400).json({ error: true, message: "Invalid user's id" });
      return;
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  httpGetAllUsers,
  httpCreateUser,
  httpUpdateUser,
  httpDeleteUser,
};
