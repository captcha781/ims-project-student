import React from "react";
import { useRoutes } from "react-router-dom";
import { ProtectedRoute } from "./config/ProtectedRoute";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute type={"public"}>
        <Main>
          <Home />
        </Main>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute type={"private"}>
        <Main>
          <Dashboard />
        </Main>
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute type={"auth"}>
        <SignIn />
      </ProtectedRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <ProtectedRoute type={"auth"}>
        <ForgotPassword />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <>404</>,
  },
];

const AppRoutes = () => {
  return <>{useRoutes(routes)}</>;
};

export default AppRoutes;
