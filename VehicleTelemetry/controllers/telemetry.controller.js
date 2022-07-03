const TelemetryService = require("../services/telemetry.service");

const getAllMeasurements = (req, res, next) => {
  const { vehicleId, fromDate, toDate } = req.query;

  return TelemetryService.findAll({ vehicleId, fromDate, toDate })
    .then((response) => res.status(200).json(response))
    .catch((err) => next(err));
};

const createMeasurement = (req, res, next) => {
  const { body: data } = req;

  return TelemetryService.createMeasurement(data)
    .then((response) => res.status(201).json(response))
    .catch((err) => next(err));
};

module.exports = {
  getAllMeasurements,
  createMeasurement,
};
