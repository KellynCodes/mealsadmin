import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MealsAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <GrLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <AiOutlineSetting />
          </div>
          <img src="/riceandmeat.jpg" alt="User Avater" className="topAvater" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
