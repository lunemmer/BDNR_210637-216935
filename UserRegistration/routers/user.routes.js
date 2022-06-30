const { Router } = require("express");

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = Router();

router.get("/users", getAllUsers);

router.post("/users", createUser);

router.get("/users/:id", getUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
