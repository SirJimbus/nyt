import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Books from "./pages/Books";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import Arts from "./pages/Arts";
import Food from "./pages/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "books",
    element: <Books />,
  },
  {
    path: "/politics",
    element: <Politics />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/arts",
    element: <Arts />,
  },
  {
    path: "/food",
    element: <Food />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
