import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forceSignout } from "./actions";
import { decodeJwt } from "./actions/jsonwebtoken";
import AppRoutes from "./AppRoutes";
import HelperRoute from "./config/HelperRoute";
import { socket } from "./config/socket";
import isLogin from "./lib/isLogin";
import { getAuthToken } from "./lib/localStorage";
import Store from "./redux/store";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = Store.getState().auth;

  useEffect(() => {
    socket.on("forceLogout", (data) => {
      forceSignout(navigate, dispatch);
    });
  },[])

  useEffect(() => {
    if(!isAuth && isLogin()){
      decodeJwt(getAuthToken(), Store.dispatch);
    }
  },[])

  return (
    <React.Fragment>
      <HelperRoute />
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
