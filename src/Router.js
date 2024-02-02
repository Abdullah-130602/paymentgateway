import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./jsx/pages/Auth/Pages/Login";
import Register from "./jsx/pages/Auth/Pages/Register";
import Requirements from "./jsx/pages/Auth/Pages/Requirements";
import { RequirementsProvider } from "./jsx/pages/Auth/Context/RequirementsProvider";
import { MainLayout } from "./jsx";
import Home from "./jsx/components/Dashboard/Home";
import AppProfile from "./jsx/components/AppsMenu/AppProfile/AppProfile";
import RequirementList from "./jsx/components/Dashboard/Registration/RequirementList";
import CreateAccount from "./jsx/components/Dashboard/Registration/CreateAccount";
import Company from "./jsx/components/Dashboard/Company/Company";
import SuperAdminSetting from "./jsx/components/Dashboard/SuperAdminSetting/SuperAdminSetting";

import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/requirement/:id",
    element: (
      <RequirementsProvider>
        <Requirements />
      </RequirementsProvider>
    ),
  },

  // dashboard routes
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/app-profile",
        element: <AppProfile />,
      },
      {
        path: "/dashboard/requirement-form-list",
        element: <RequirementList />,
      },
      {
        path: "/dashboard/create-account/:id/:userID/Create-Account",
        element: <CreateAccount />,
      },
      {
        path: "/dashboard/company",
        element: <Company />,
      },
      {
        path: "/dashboard/settings",
        element: <SuperAdminSetting />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
