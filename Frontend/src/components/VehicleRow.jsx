import React, { useEffect, useState, useMemo } from "react";
import { string } from "prop-types";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import VisibilityIcon from "@mui/icons-material/Visibility";
import routesPaths from "routes/routesPaths";
import useFetch from "utils/useFetch";

const VehicleRow = ({ id, name }) => {
  const navigate = useNavigate();
  const { loading, onFetch } = useFetch();
  const [intervalId, setIntervalId] = useState();
  const [isRunning, setIsRunning] = useState(false);

  const initialValue = useMemo(
    () => ({
      pressure: "-",
      temperature: "-",
      velocity: "-",
      voltage: "-",
      vibration: "-",
      electromagneticWaves: "-",
    }),
    []
  );
  const [data, setData] = useState(() => initialValue);

  const onSendData = (body) => {
    console.log(`Sending data for vehicle #${id}`);
    onFetch({
      url: `${process.env.REACT_APP_TELEMETRY_API_URL}/measurements`,
      method: "POST",
      body,
    });
  };

  const setNewData = () => {
    const newData = {
      datetime: new Date(),
      vehicleId: id,
      temperature: Math.floor(Math.random() * 100),
      pressure: Math.floor(Math.random() * 100),
      voltage: Math.floor(Math.random() * 100),
      velocity: Math.floor(Math.random() * 100),
      electromagneticWaves: Math.floor(Math.random() * 100),
      vibration: Math.floor(Math.random() * 100),
    };
    setData(newData);
    return newData;
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const d = setNewData();
        onSendData(d);
      }, 10000);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
      setData(initialValue);
    }
  }, [isRunning]);

  useEffect(
    () => () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    },
    []
  );

  const onClickView = () => {
    navigate(routesPaths.vehicleMeasures.replace(":id", id));
  };

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell component="th" scope="row">
        <Switch onClick={() => setIsRunning(!isRunning)} />
      </TableCell>
      <TableCell component="th" scope="row">
        {data.pressure}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.temperature}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.velocity}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.voltage}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.vibration}
      </TableCell>
      <TableCell component="th" scope="row">
        {data.electromagneticWaves}
      </TableCell>
      <TableCell component="th" scope="row">
        {loading ? "Sending..." : "-"}
      </TableCell>
      <TableCell component="th" scope="row">
        <IconButton onClick={onClickView}>
          <VisibilityIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

VehicleRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default VehicleRow;
