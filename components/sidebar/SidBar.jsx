import React from "react";
import MdLineStyle from "react-icons/md";
import MdOutlineTimeline from "react-icons/md";
import MdAttachMoney from "react-icons/md";
import BiTrendingUp from "react-icons/bi";
import IoPersonOutline from "react-icons/io";
import HiOutlineBuildingStorefront from "react-icons/hi";
import Link from "next";

const SidBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <div className="sideBarMenu">
            <h3 className="">DashBoard</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <MdLineStyle className="sideBarIcons" />
                <Link className="link" to="/dashboard">
                  Home
                </Link>
              </li>
              <li className="sideBarListItems">
                <MdOutlineTimeline className="sideBarIcons" />
                Analytics
              </li>
              <li className="sideBarListItems">
                <BiTrendingUp className="sideBarIcons" />
                Sales
              </li>
            </ul>
            MdOutlineTimeline
          </div>
          <div className="sideBarMenu">
            <h3 className="">Quick Menu</h3>
            <ul className="sideBarList">
              <Link className="link" to="/dashboard/users">
                <li className="sideBarListItems">
                  <IoPersonOutline className="sideBarIcons" />
                  Users
                </li>
              </Link>
              <Link className="link" to="/dashboard/products">
                <li className="sideBarListItems">
                  <HiOutlineBuildingStorefront className="sideBarIcons" />
                  Products
                </li>
              </Link>
              <li className="sideBarListItems">
                <MdAttachMoney className="sideBarIcons" />
                Transactions
              </li>
              <li className="sideBarListItems">
                <BiTrendingUp className="sideBarIcons" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sideBarMenu">
            <h3 className="">Notifications</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <MdLineStyle className="sideBarIcons" />
                Mail
              </li>
              <li className="sideBarListItems">
                <MdOutlineTimeline className="sideBarIcons" />
                FeedBack
              </li>
              <li className="sideBarListItems">
                <BiTrendingUp className="sideBarIcons" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sideBarMenu">
            <h3 className="">Staff</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <MdLineStyle className="sideBarIcons" />
                Manage
              </li>
              <li className="sideBarListItems">
                <MdOutlineTimeline className="sideBarIcons" />
                Analytics
              </li>
              <li className="sideBarListItems">
                <BiTrendingUp className="sideBarIcons" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidBar;
