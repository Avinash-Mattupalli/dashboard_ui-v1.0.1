import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import SignIn from "pages/SignIn";
import Dashboard from "pages/Dashboard";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
