import React from "react";
import VehiclePage from "pages/VehiclePage";
import ProfilePage from "pages/ProfilePage";
import SignUpPage from "pages/SignUpPage";
import UsersPage from "pages/UsersPage";
import routesPaths from "./routesPaths";

const routes = [
  {
    path: routesPaths.register,
    element: <SignUpPage />,
  },
  {
    path: routesPaths.users,
    element: <UsersPage />,
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
