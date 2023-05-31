import React from "react";
import Topbar from "@/components/topbars/Topbar";
import SideBar from "../components/sidebar/SideBar";
import Home from "@/pages/home";
export default function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="DashBoardContainer">
        <SideBar />
        <Home />
      </div>
    </>
  );
}
