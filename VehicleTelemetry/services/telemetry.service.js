const cassandra = require("cassandra-driver");
const { Uuid } = require("cassandra-driver").types;

const client = new cassandra.Client({
  contactPoints: [`0.0.0.0:${process.env.DB_PORT}`],
  localDataCenter: "datacenter1",
  keyspace: process.env.CASSANDRA_KEYSPACE,
});

const findAll = async (data = {}) => {
  const query = "SELECT * FROM measurement";
  const params = [];

  // if (data.vehicleId) {
  //   query = `${query} WHERE vehicle_id = ?`;
  //   params = [data.vehicleId];
  // }

  // if (data.fromDateTime || data.toDateTime) {
  //   query = params.length ? `${query} AND` : `${query} WHERE`;
  // }

  // if (data.fromDateTime && data.toDateTime) {
  //   query = `${query} datetime > ? AND datetime < ? ALLOW FILTERING`;
  //   params = [...params, data.fromDateTime, data.toDateTime];
  // } else if (data.fromDateTime) {
  //   query = `${query} datetime > ? ALLOW FILTERING`;
  //   params = [...params, data.fromDateTime];
  // } else if (data.toDateTime) {
  //   query = `${query} datetime < ? ALLOW FILTERING`;
  //   params = [...params, data.toDateTime];
  // }

  // query = `${query};`;

  return client
    .execute(query, params, { prepare: true })
    .then(({ rows, rowLength }) => ({ rows, rowLength }))
    .catch(({ message }) => {
      throw new Error(`An error ocurred when getting measurements: ${message}`);
    });
};

const findMeasurementById = () => Promise.resolve();

const createMeasurement = (data) => {
  const query =
    "INSERT INTO measurement (datetime, measurement_id, vehicle_id, temperature, pressure, voltage, velocity, electromagnetic_waves, vibration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const measurementId = Uuid.random().toString();
  const datetime = new Date(data.datetime);

  const params = [
    datetime,
    measurementId,
    data.vehicleId,
    data.temperature,
    data.pressure,
    data.voltage,
    data.velocity,
    data.electromagneticWaves,
    data.vibration,
  ];

  return client
    .execute(query, params, { prepare: true })
    .then((resp) => resp)
    .catch(({ message }) => {
      throw new Error(`An error ocurred when creating measurement: ${message}`);
    });
};

module.exports = {
  findAll,
  findMeasurementById,
  createMeasurement,
};
