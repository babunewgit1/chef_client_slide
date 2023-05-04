import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails/ChefDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Blog from "../Pages/Blog/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chefs-server-side-babuhp80-gmailcom.vercel.app/main"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivetRoute>
            <ChefDetails></ChefDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chefs-server-side-babuhp80-gmailcom.vercel.app/main/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
