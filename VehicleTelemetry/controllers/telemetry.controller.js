const TelemetryService = require("../services/telemetry.service");

const getAllMeasurements = (req, res, next) => {
  const { fromDateTime, toDateTime } = req.query;

  return TelemetryService.findAll({ fromDateTime, toDateTime })
    .then((response) => res.status(200).json(response))
    .catch((err) => next(err));
};

const getMeasurement = () => (req, res, next) => {
  const { id } = req.params;

  return TelemetryService.findMeasurementById(id)
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ error: { message: "Measurement not found" } });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => {
      next(err);
    });
};

const createMeasurement = (req, res, next) => {
  const { body: data } = req;

  return TelemetryService.createMeasurement(data)
    .then((response) => res.status(201).json(response))
    .catch((err) => next(err));
};

module.exports = {
  getAllMeasurements,
  getMeasurement,
  createMeasurement,
};
