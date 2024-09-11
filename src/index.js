import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import More from "./pages/more";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> Opss Sorry!</h1>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1> Opss Sorry !</h1>,
  },
  {
    path: "/skills",
    element: <Skills />,
    errorElement: <h1> Opss Sorry !</h1>,
  },
  {
    path: "/more",
    element: <More />,
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

serviceWorkerRegistration.register();
