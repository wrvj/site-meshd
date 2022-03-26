import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const PrivateRoute = ({ children }: any) => {
  const { currentUser }: any = useAuth();

  return currentUser ? children : <Navigate to="/login" />
};

export default PrivateRoute;
