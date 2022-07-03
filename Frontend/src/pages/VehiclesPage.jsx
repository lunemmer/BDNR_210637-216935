import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { VEHICLES } from "utils/constants";
import VehicleRow from "components/VehicleRow";

const VehiclesPage = () => (
  <>
    <Typography variant="h4" m={2}>
      Telemetría de Vehículos
    </Typography>
    <Typography variant="p" mx={2}>
      (Numeros random - Cambian cada 30s luego de ser prendido el vehiculo)
    </Typography>

    <TableContainer>
      <Table aria-label="users">
        <TableHead>
          <TableRow>
            <TableCell>Vehicle Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Turn on</TableCell>
            <TableCell>Pressure</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Velocity</TableCell>
            <TableCell>Voltage</TableCell>
            <TableCell>Vibration</TableCell>
            <TableCell>Waves</TableCell>
            <TableCell>Sending Data</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {VEHICLES.map((data) => (
            <VehicleRow {...data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);

export default VehiclesPage;
