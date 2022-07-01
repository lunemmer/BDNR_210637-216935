import React from "react";
import VehiclePage from "pages/VehiclePage";
import ProfilePage from "pages/ProfilePage";
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
    path: routesPaths.profile,
    element: <ProfilePage />,
  },
  {
    path: routesPaths.notFound,
    element: <SignUpPage />,
  },
];

export default routes;
