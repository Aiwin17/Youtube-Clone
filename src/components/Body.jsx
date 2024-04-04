import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      <SideBar />
      <div className={isMenuOpen ? "ml-52" : null}>
        <Outlet />  
      </div>
    </div>
  );
};

export default Body;
