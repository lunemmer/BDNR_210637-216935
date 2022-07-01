import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { string } from "prop-types";
import routesPaths from "routes/routesPaths";
import useFetch from "utils/useFetch";

const DeleteUser = ({ userId }) => {
  const navigate = useNavigate();
  const { loading, success, error, onFetch } = useFetch();

  useEffect(() => {
    if (success) {
      navigate(routesPaths.users);
    }
  }, [success]);

  const onRemoveUser = () => {
    onFetch({ uri: `/users/${userId}`, method: "DELETE" });
  };

  return (
    <Box display="flex" justifyContent="flex-end">
      <LoadingButton
        loading={loading}
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        xs={{ display: "flex", justifyContent: "flex-end" }}
        onClick={onRemoveUser}
      >
        Delete User
      </LoadingButton>

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

DeleteUser.propTypes = {
  userId: string.isRequired,
};

export default DeleteUser;
