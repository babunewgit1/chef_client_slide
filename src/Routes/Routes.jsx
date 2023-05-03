import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails/ChefDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/main"),
      },
      {
        path: "/chef/:id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/main/${params.id}`),
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
