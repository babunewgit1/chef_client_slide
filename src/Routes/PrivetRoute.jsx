import React, { useContext } from "react";
import { MyContext } from "../AuthProvidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(MyContext);
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
