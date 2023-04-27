import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/HOME/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import HOME from './components/HOME';
import { RecoilRoot } from "recoil";
import Register from "./components/HOME/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
