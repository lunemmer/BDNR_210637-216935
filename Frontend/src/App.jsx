import React from "react";
import { useRoutes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import routes from "routes";
import routesPaths from "routes/routesPaths";

const navItems = [
  {
    display: "Register User",
    route: routesPaths.register,
  },
  {
    display: "All Users",
    route: routesPaths.users,
  },
  {
    display: "Vehicle Info",
    route: routesPaths.vehicles,
  },
];

function App() {
  const appRoutes = useRoutes(routes);

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Box>
            {navItems.map(({ display, route }) => (
              <Button key={display} sx={{ color: "#fff" }} href={route}>
                {display}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" mt={12} mx={4}>
        {appRoutes}
      </Box>
    </>
  );
}

export default App;
