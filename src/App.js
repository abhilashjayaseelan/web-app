import React from "react";
//? importing component functions;
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import { createBrowserRouter, Outlet } from "react-router-dom"; //? importing router functions form router dom;

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        element: <UserSignup/>
      }
    ],
  },
]);

export default appRouter;
