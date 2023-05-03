import React, { useEffect } from "react";
//? importing component functions;
import Body from "./pages/Body";
import Error from "./components/Error";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Admin from "./pages/Admin";
import { createBrowserRouter, Outlet } from "react-router-dom";
import firebase from "./firebase/config";
import { actions } from "./slices/userSlicer";
import { useDispatch } from "react-redux";

const AppLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(actions.userLoggedIn(user?.displayName));
    });
  });
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
        element: <Admin />,
      },
    ],
  },
]);

export default appRouter;
