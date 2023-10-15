import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  if (localStorage.getItem("token") === null) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You need to log in first", from: location.pathname }}
        replace
      />
    );
  }
  return <Outlet />;
};

export default AuthLayout;
