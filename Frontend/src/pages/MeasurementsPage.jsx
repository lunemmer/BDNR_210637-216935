import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import useFetch from "utils/useFetch";
import MeasurementTable from "components/MeasurementTable";

const MeasurementsPage = () => {
  const { loading, error, onFetch, data } = useFetch();

  useEffect(() => {
    onFetch({
      url: `${process.env.REACT_APP_TELEMETRY_API_URL}/measurements`,
      method: "GET",
    });
  }, []);

  return (
    <>
      <Typography variant="h4" m={2}>
        All Measurements
      </Typography>

      <MeasurementTable rows={data?.rows} showVehicle />

      {loading && <CircularProgress color="primary" />}

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}
    </>
  );
};

export default MeasurementsPage;
