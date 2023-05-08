import React from "react";
import SidBar from "./sidebar/SidBar";
import Topbar from "./topbars/Topbar";
import Home from "./pages/Home/Home";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="DashBoardContainer">
        <SidBar />
        <Home />
      </div>
    </>
  );
};

export default Dashboard;
