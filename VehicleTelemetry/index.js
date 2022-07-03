require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const telemetryRoutes = require("./routes/telemetry.routes");

app.use("/", telemetryRoutes);

const start = async () => {
  try {
    const port = process.env.SERVER_PORT || 3002;
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
