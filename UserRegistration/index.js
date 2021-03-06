require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routers/user.routes");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, _, res, next) => {
  res.status(error.status || 500).json({
    error: { message: error.message },
  });
});

const start = async () => {
  try {
    const username = process.env.MONGO_ROOT_USERNAME;
    const password = process.env.MONGO_ROOT_PASSWORD;
    const dbPort = process.env.DB_PORT;

    await mongoose.connect(
      `mongodb://${username}:${password}@0.0.0.0:${dbPort}/`
    );
    console.log("Database was connected successfully");

    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
