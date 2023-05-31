import React from "react";
import { MdLineStyle, MdTimeline } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineAnnotation } from "react-icons/hi";

export default function SideBar() {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <div className="sideBarMenu">
            <h3 className="">DashBoard</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <MdLineStyle className="sideBarIcons" />
                Home
              </li>
              <li className="sideBarListItems">
                <MdTimeline className="sideBarIcons" />
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
              <li className="sideBarListItems">
                <IoMdPerson className="sideBarIcons" />
                Users
              </li>
              <li className="sideBarListItems">
                <HiOutlineAnnotation className="sideBarIcons" />
                Products
              </li>
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
}
