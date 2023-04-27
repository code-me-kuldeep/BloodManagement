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
import FindBlood from "./components/DASHBOARD/pages/FindBlood"
import RequiredBloodForm from "./components/DASHBOARD/pages/RequiredBloodForm"
import DonateBloodForm from "./components/DASHBOARD/pages/DonateBloodForm"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>,
    children:[
      {
        path: 'dashboard/findBlood',
        element: <FindBlood/>
      },
      {
        path: 'dashboard/requireBlood',
        element: <RequiredBloodForm/>
      },
      {
        path: 'dashboard/donate',
        element: <DonateBloodForm/>
      },
    ]
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
