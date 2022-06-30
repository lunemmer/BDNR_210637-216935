import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";

function App() {
  const appRoutes = useRoutes(routes);

  return <div>{appRoutes}</div>;
}

export default App;
