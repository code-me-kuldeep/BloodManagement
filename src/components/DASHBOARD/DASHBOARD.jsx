import React from "react";
import "./App.css";
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import LeftPart from "./leftPart/LeftPart";
import RightPart from "./rightPart/RightPart";
import { Outlet, useLocation } from "react-router-dom";

const DASHBOARD = ({ user }) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/Login";

  console.log(location);
  return (
    <div className="App overflow-y-hidden ">
      {/* Head Navigation */}
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <NavBar />
        {/* Home page start */}
        {isHomepage ? (
          <div className="border-2 border-red-800 grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
            <LeftPart user={user}/>
            <RightPart user={user}/>
          </div>
        ) : (
          <div className="border-2 border-red-800 grid grid-cols-1 xl:grid-cols-2 col-span-10 w-full">
          <Outlet />
          </div>
        )}
        {/* Home page end */}
      </div>
    </div>
  );
};

export default DASHBOARD;
