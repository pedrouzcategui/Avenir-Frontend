import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
    element: <div>Dashboard</div>,
  },
];

const ROUTER = createBrowserRouter(ROUTES);

export default ROUTER;
