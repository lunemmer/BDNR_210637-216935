const { Router } = require("express");

const {
  getAllMeasurements,
  getMeasurement,
  createMeasurement,
} = require("../controllers/telemetry.controller");

const router = Router();

router.get("/measurements", getAllMeasurements);

router.get("/measurements/:id", getMeasurement);

router.post("/measurements", createMeasurement);

module.exports = router;
