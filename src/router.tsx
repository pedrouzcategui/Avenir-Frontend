import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

const ROUTES = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
];

const ROUTER = createBrowserRouter(ROUTES);

export default ROUTER;
