import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import routes from "routes";

const navItems = ["Usuarios", "Vehículos"];

function App() {
  const appRoutes = useRoutes(routes);
  const location = useLocation();

  return (
    <>
      {!location.pathname?.includes("register") && (
        <AppBar component="nav">
          <Toolbar>
            <Box>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )}
      <div>{appRoutes}</div>
    </>
  );
}

export default App;
