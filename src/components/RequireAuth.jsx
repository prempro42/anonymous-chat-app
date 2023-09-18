import React, { Children } from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log({ user });
  console.log(user?.user);

  if (!user?.user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default RequireAuth;
