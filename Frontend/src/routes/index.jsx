import React from "react";
import VehiclePage from "pages/VehiclePage";
import UserPage from "pages/UserPage";
import routesPaths from "./routesPaths";

const routes = [
  {
    path: routesPaths.vehicles,
    element: <VehiclePage />,
  },
  {
    path: routesPaths.users,
    element: <UserPage />,
  },
  {
    path: routesPaths.notFound,
    element: <UserPage />,
  },
];

export default routes;
