import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SignUpForm from "components/SignUpForm";
import useFetch from "utils/useFetch";
import routesPaths from "routes/routesPaths";
import { object } from "prop-types";

const EditUser = ({ user }) => {
  const navigate = useNavigate();
  const { loading, success, error, onFetch } = useFetch();

  useEffect(() => {
    if (success) {
      navigate(routesPaths.users);
    }
  }, [success]);

  const onEditUser = (updatedData) => {
    onFetch({ uri: `/users/${user._id}`, method: "PUT", body: updatedData });
  };

  return (
    <>
      <SignUpForm onSubmit={onEditUser} loading={loading} defaultUser={user} />

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}
    </>
  );
};

EditUser.propTypes = {
  user: object.isRequired,
};

export default EditUser;
