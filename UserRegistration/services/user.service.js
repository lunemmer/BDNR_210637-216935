const User = require("../models/user.model");

const findAll = () =>
  User.find()
    .then((users) => users)
    .catch((err) => {
      throw new Error(`ERROR`, err);
    });

const findUserById = (id) =>
  User.findById(id)
    .then((user) => user)
    .catch((err) => {
      throw new Error(`ERROR`, err);
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

  user
    .save()
    .then((resp) => resp)
    .catch((err) => {
      throw new Error(`ERROR`, err);
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
    .catch((err) => {
      throw new Error(`ERROR`, err);
    });

const findUserByIdAndDelete = (id) =>
  User.findByIdAndRemove(id)
    .then((user) => user)
    .catch((err) => {
      throw new Error(`ERROR`, err);
    });

module.exports = {
  findAll,
  insertUser,
  findUserById,
  findUserByIdAndUpdate,
  findUserByIdAndDelete,
};
