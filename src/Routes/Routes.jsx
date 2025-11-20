import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Home/Shop/Shop/Shop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "shop/:category",
        Component:  Shop,
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ],
  },
]);
