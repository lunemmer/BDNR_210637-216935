const { Router } = require("express");

const {
  getAllMeasurements,
  createMeasurement,
} = require("../controllers/telemetry.controller");

const router = Router();

router.get("/measurements", getAllMeasurements);

router.post("/measurements", createMeasurement);

module.exports = router;
