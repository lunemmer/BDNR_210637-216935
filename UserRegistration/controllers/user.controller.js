const UserService = require("../services/user.service");

const getAllUsers = (_, res) =>
  UserService.findAll()
    .then((users) => res.status(200).json({ users }))
    .catch((err) => res.status(500).json({ message: err }));

const getUser = (req, res) => {
  const { id } = req.params;

  return UserService.findUserById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ user });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

const createUser = (req, res) => {
  const { body: newUser } = req;

  return UserService.insertUser(newUser)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(400).json({ message: err }));
};

const updateUser = (req, res) => {
  const { id } = req.param;
  const { body: updatedUser } = req;

  return UserService.findUserByIdAndUpdate(id, updatedUser)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => res.status(400).json({ message: err }));
};

const deleteUser = (req, res) => {
  const { id } = req.param;

  return UserService.findUserByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
