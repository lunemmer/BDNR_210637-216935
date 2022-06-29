const express = require("express");
// const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => res.json({ message: "Hello World!" }));

const start = async () => {
  try {
    // await mongoose.connect(
    //   "mongodb://root:root@localhost:27017/mongoose?authSource=admin"
    // );
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
