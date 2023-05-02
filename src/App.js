import React from "react";
//? importing component functions;
import Body from "./pages/Body";
import Error from "./components/Error";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import AdminLogin from "./components/Admin/AdminLogin";
import { createBrowserRouter, Outlet } from "react-router-dom"; //? importing router functions form router dom;

const AppLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <UserSignup />,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
    ],
  },
]);

export default appRouter;
