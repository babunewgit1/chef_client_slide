import React, { useContext } from "react";
import { MyContext } from "../AuthProvidor/AuthProvidor";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Shared/Spiner/Spinner";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(MyContext);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
