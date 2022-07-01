import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SignUpForm from "components/SignUpForm";

const SignUpPage = () => (
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

          <SignUpForm />
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default SignUpPage;
