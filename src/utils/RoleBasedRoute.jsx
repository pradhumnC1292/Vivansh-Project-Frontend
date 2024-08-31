import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RoleBasedRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // If not logged in, redirect to login page
    return <Navigate to="/" />;
  }

  if (user.role !== requiredRole) {
    // If logged in but does not have the required role, redirect to a not authorized page or homepage
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default RoleBasedRoute;
