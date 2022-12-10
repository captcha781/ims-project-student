import { Navigate } from "react-router-dom";
import isLogin from "../lib/isLogin";

export const ProtectedRoute = ({ type, children }) => {
  if (type === 'auth' && isLogin() === true) {
    return <Navigate to="/dashboard" />
  } else if (type === 'private' && isLogin() !== true) {
    return <Navigate to="/signin" />
  }
  return children;
};