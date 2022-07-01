import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import useFetch from "utils/useFetch";
import DeleteUser from "components/DeleteUser";
import EditUser from "components/EditUser";

const ProfilePage = () => {
  const { id } = useParams();
  const { loading, error, onFetch, data } = useFetch();

  useEffect(() => {
    onFetch({ uri: `/users/${id}`, method: "GET" });
  }, []);

  return (
    <>
      <Typography variant="h4" m={2}>
        User Profile: {data.user?._id}
      </Typography>

      {loading && <CircularProgress color="primary" />}

      {data.user && <EditUser user={data.user} />}

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}

      {data.user && <DeleteUser userId={data.user._id} />}
    </>
  );
};

export default ProfilePage;
