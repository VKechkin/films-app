import React from "react";

import { Navigate } from "react-router-dom";

import { Main } from "@components/Main";
import { Favourites, Rating } from "@components";

const Routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/rating",
    element: <Rating />
  },
  {
    path: "/favourites",
    element: <Favourites />
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
