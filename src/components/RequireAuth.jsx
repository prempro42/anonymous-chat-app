import React, { Children } from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.username) {
    return <Navigate to="/" />;
  }
  return children;
}

export default RequireAuth;
