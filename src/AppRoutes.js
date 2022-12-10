import React from "react";
import { useRoutes } from "react-router-dom";
import { ProtectedRoute } from "./config/ProtectedRoute";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute type={"public"}>
        <Home />
      </ProtectedRoute>
    ),
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
