import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SignUpForm from "components/SignUpForm";
import { handleError } from "utils";
import routesPaths from "routes/routesPaths";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onRegisterUser = async (newUser) => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser),
      });

      await handleError(response);

      const { user } = await response.json();
      window.sessionStorage.setItem("USER_ID", user._id);
      navigate(routesPaths.profile);
    } catch (err) {
      setError(err?.message || "Ha ocurrido un error al crear un usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      backgroundColor="primary.dark"
    >
      <Box component="main" m={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" m={2}>
              Registro de Usuario
            </Typography>

            <SignUpForm onSubmit={onRegisterUser} loading={loading} />

            {error && (
              <Typography variant="p" m={2}>
                {error}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SignUpPage;
