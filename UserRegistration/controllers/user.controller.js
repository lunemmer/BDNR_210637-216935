const UserService = require("../services/user.service");

const getAllUsers = (_, res, next) =>
  UserService.findAll()
    .then((users) => res.status(200).json({ users }))
    .catch((err) => next(err));

const getUser = (req, res, next) => {
  const { id } = req.params;

  return UserService.findUserById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => {
      next(err);
    });
};

const createUser = (req, res, next) => {
  const { body: newUser } = req;

  if (!newUser.email || !newUser.password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  return UserService.insertUser(newUser)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => next(err));
};

const updateUser = (req, res, next) => {
  const { id } = req.param;
  const { body: updatedUser } = req;

  const user = {
    email: updatedUser.email,
    password: updatedUser.password,
    username: updatedUser.username,
    name: updateUser.name,
    lastName: updateUser.lastName,
    birthDate: updatedUser.birthDate,
    country: updatedUser.country,
    language: updatedUser.language,
    paymentMethods: updatedUser.paymentMethods,
  };

  return UserService.findUserByIdAndUpdate(id, user)
    .then((resp) => {
      if (!resp) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user: resp });
    })
    .catch((err) => next(err));
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;

  return UserService.findUserByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch((err) => next(err));
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
