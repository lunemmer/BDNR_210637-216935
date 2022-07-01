import React from "react";
import VehiclePage from "pages/VehiclePage";
import UserPage from "pages/UserPage";
import SignUpPage from "pages/SignUpPage";
import routesPaths from "./routesPaths";

const routes = [
  {
    path: routesPaths.register,
    element: <SignUpPage />,
  },
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
    element: <SignUpPage />,
  },
];

export default routes;
