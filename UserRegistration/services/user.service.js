const User = require("../models/user.model");

const findAll = () =>
  User.find()
    .then((users) => users)
    .catch(({ message }) => {
      throw new Error(`An error ocurred when getting all users: ${message}`);
    });

const findUserById = (id) =>
  User.findOne({ _id: id })
    .then((user) => user)
    .catch(({ message }) => {
      throw new Error(`An error ocurred when getting user: ${message}`);
    });

const insertUser = (data) => {
  const user = new User({
    email: data.email,
    password: data.password,
    profile: {
      username: data.username,
      name: data.name,
      lastName: data.lastName,
      birthDate: data.birthDate,
      country: data.country,
      language: data.language,
      paymentMethods: data.paymentMethods,
    },
  });

  return user
    .save()
    .then((resp) => resp)
    .catch((err) => {
      console.log(err);
      if (err.code === 11000) {
        const error = new Error("Email already exists");
        error.status = 400;
        throw error;
      }
      throw new Error(
        `An error ocurred when inserting new user: ${err.message}`
      );
    });
};

const findUserByIdAndUpdate = (id, data) =>
  User.findByIdAndUpdate(id, {
    email: data.email,
    password: data.password,
    profile: {
      username: data.username,
      name: data.name,
      lastName: data.lastName,
      birthDate: data.birthDate,
      country: data.country,
      language: data.language,
      paymentMethods: data.paymentMethods,
    },
  })
    .then((user) => user)
    .catch(({ message }) => {
      throw new Error(`An error ocurred when updating user: ${message}`);
    });

const findUserByIdAndDelete = (id) =>
  User.deleteOne({ _id: id })
    .then((data) => {
      if (!data || data.deletedCount === 0) {
        const error = new Error("User not found`");
        error.status = 400;
        throw error;
      }
      return data;
    })
    .catch(({ message }) => {
      throw new Error(`An error ocurred when deleting user: ${message}`);
    });

module.exports = {
  findAll,
  insertUser,
  findUserById,
  findUserByIdAndUpdate,
  findUserByIdAndDelete,
};
