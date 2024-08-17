import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layout/MainLayout";

const ROUTES = [
  {
    path: "/",
    element: <div>Homepage I guess</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <p className="font-bold">Some Dashboard Content</p>,
      },
    ],
  },
];

const ROUTER = createBrowserRouter(ROUTES);

export default ROUTER;
