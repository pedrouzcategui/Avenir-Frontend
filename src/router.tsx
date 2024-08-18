import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layout/MainLayout";
import Balance from "./pages/Balance";

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
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Balance />,
      },
    ],
  },
];

const ROUTER = createBrowserRouter(ROUTES);

export default ROUTER;
