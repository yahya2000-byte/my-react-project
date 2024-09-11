import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import HTML from "./pages/html";
import CSS from "./pages/css";
import JAVASCRIPT from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> Opss Sorry!</h1>,
  },
  {
    path: "/html",
    element: <HTML />,
    errorElement: <h1> Opss Sorry !</h1>,
  },
  {
    path: "/css",
    element: <CSS />,
    errorElement: <h1> Opss Sorry !</h1>,
  },
  {
    path: "/javascript",
    element: <JAVASCRIPT />,
    errorElement: <h1> Opss Sorry !</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
