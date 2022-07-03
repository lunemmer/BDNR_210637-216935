import React from "react";
import { format } from "date-fns";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { array, bool } from "prop-types";

const MeasurementTable = ({ rows = [], showVehicle = false }) => (
  <TableContainer>
    <Table aria-label="measurements">
      <TableHead>
        <TableRow>
          {showVehicle && <TableCell>Vehicle Id</TableCell>}
          <TableCell>Date</TableCell>
          <TableCell>Measurement Id</TableCell>
          <TableCell>Pressure</TableCell>
          <TableCell>Temperature</TableCell>
          <TableCell>Velocity</TableCell>
          <TableCell>Vibration</TableCell>
          <TableCell>Voltage</TableCell>
          <TableCell>Waves</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((resp) => (
          <TableRow key={resp.measurement_id}>
            {showVehicle && (
              <TableCell component="th" scope="row">
                {resp.vehicle_id || "-"}
              </TableCell>
            )}
            <TableCell component="th" scope="row">
              {format(new Date(resp.datetime), "dd/MM/yyyy - hh:mm:ss")}
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.measurement_id || "-"}
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.pressure || "-"} psi
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.temperature || "-"} °C
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.velocity || "-"} km/h
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.vibration || "-"}
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.voltage || "-"} V
            </TableCell>
            <TableCell component="th" scope="row">
              {resp.electromagnetic_waves || "-"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

MeasurementTable.propTypes = {
  rows: array,
  showVehicle: bool,
};

export default MeasurementTable;
