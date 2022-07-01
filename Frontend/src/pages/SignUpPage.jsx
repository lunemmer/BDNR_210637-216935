import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SignUpForm from "components/SignUpForm";
import routesPaths from "routes/routesPaths";
import useFetch from "utils/useFetch";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { loading, success, error, data, onFetch } = useFetch();

  useEffect(() => {
    if (success) {
      const { user } = data;
      navigate(routesPaths.profile.replace(":id", user._id));
    }
  }, [success]);

  const onRegisterUser = (newUser) => {
    onFetch({ uri: "/users", method: "POST", body: newUser });
  };

  return (
    <>
      <Typography variant="h4" m={2}>
        User Registration
      </Typography>

      <SignUpForm onSubmit={onRegisterUser} loading={loading} />

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}
    </>
  );
};

export default SignUpPage;
