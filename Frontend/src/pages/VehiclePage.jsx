import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import useFetch from "utils/useFetch";
import MeasurementTable from "components/MeasurementTable";

const VehiclePage = () => {
  const { id } = useParams();
  const { loading, error, onFetch, data } = useFetch();

  useEffect(() => {
    onFetch({
      url: `${process.env.REACT_APP_TELEMETRY_API_URL}/measurements?vehicleId=${id}`,
      method: "GET",
    });
  }, []);

  return (
    <>
      <Typography variant="h4" m={2}>
        Vehicle #{id}
      </Typography>

      <MeasurementTable rows={data?.rows} />

      {loading && <CircularProgress color="primary" />}

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}
    </>
  );
};

export default VehiclePage;
