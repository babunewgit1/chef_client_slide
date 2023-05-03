import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvidor from "./AuthProvidor/AuthProvidor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvidor>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvidor>
  </React.StrictMode>
);
