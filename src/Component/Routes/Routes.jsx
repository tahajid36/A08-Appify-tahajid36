import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AllApps from "../AllApps/AllApps";
import InstalledApps from "../InstalledApps/InstalledApps";
import AppDetails from "../AppDetails/AppDetails";
import ErrorNotFound from "../Error/ErrorNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error> ,
    children: [
      {
        index: true,
        path: "/",
        loader:()=> fetch("/info.json").then(res=>res.json()),
        Component: Home
      },
      {
        path: '/allapps',
        loader:()=> fetch("/info.json").then(res=>res.json()),
        Component: AllApps
      },
      {
        path: '/installedapps',
        loader:()=> fetch("/info.json").then(res=>res.json()),
        Component: InstalledApps
      },
      {
        path: '/appdetails/:id',
        
        loader:()=> fetch("/info.json").then(res=>res.json()),
        Component: AppDetails,
        errorElement:  <ErrorNotFound></ErrorNotFound>

      }
    ],
  },
  {
    path: '*',
    
    element: <Error></Error>
  }
]);
