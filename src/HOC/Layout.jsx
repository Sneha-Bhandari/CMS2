import React from "react";
import Header from "../Component/Navigation/Header";
import Footer1 from "../Component/Footer/Footer1";
import { Outlet } from "react-router-dom";
import SideBar from "../Component/Navigation/SideBar";

const Layout = () => {
  return (
    <div className=" overflow-clip  h-screen  w-screen">
      <Header />
      <div className="grid grid-cols-12 h-full overflow-scroll  gap-3">
        <div className="col-span-2 ">
          <SideBar />
        </div>
        <div className="relative col-span-10 overflow-scroll pb-44 bg-white">
          <Outlet />
        </div>
      </div>
      {/* <Footer1/> */}
    </div>
  );
};

export default Layout;
