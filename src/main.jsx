import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BoughtItem from "./cart/bought";
import Loader from "./body/body";
import Cart from "./cart/cart";

const router = createBrowserRouter([

  {
    path: "/Home",
    element:<Loader/>,
  },

  {
    path: "/cart",
    element:<Cart/>,
  },
  {
    path: "/bought",
    element: <BoughtItem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
