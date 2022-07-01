import React from "react";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import routesPaths from "routes/routesPaths";

const ProfilePage = () => {
  const userId = window.sessionStorage.getItem("USER_ID");

  if (!userId) {
    return <Navigate to={routesPaths.register} />;
  }

  return (
    <Box component="main" mt={10}>
      Hola!
    </Box>
  );
};

export default ProfilePage;
