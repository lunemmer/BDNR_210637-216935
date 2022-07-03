import React from "react";
import VehiclesPage from "pages/VehiclesPage";
import VehiclePage from "pages/VehiclePage";
import ProfilePage from "pages/ProfilePage";
import SignUpPage from "pages/SignUpPage";
import UsersPage from "pages/UsersPage";
import MeasurementsPage from "pages/MeasurementsPage";
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
    element: <VehiclesPage />,
  },
  {
    path: routesPaths.vehicleMeasures,
    element: <VehiclePage />,
  },
  {
    path: routesPaths.measures,
    element: <MeasurementsPage />,
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
