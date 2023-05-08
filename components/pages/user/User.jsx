import React from "react";
import SidBar from "../../sidebar/SidBar";
import { BsLink } from "react-icons/bs";
import { BsFillCalendar2MinusFill } from "react-icons/bs";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import {
  MdOutlinePublishedWithChanges,
  MdPermIdentity,
  MdMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Topbar from "../../topbars/Topbar";

const User = () => {
  return (
    <>
      <Topbar />

      <div className="editUserContainer">
        <SidBar />
        <div className="editUser">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/dashboard/users/new/users">
              <button className="userAddButton">Create</button>
              <BsLink />
            </Link>
          </div>
          <div className="userContainer">
            <div className="showUser">
              <div className="topUser">
                <img
                  src="https://avatars.githubusercontent.com/u/104645889?v=4"
                  alt="user-avater"
                  className="userImg"
                />
                <div className="userTitle">
                  <span className="usersUserName">Kelly</span>
                  <span className="Title">SoftWare Engineer</span>
                </div>
              </div>
              <div className="bottomUser">
                <span className="bottomUserTitle">Account Details</span>
                <div className="userInfo">
                  <MdPermIdentity className="icon" />
                  <span className="bottomUserInfoTitle">KellynCodes</span>
                </div>
                <div className="userInfo">
                  <MdMailOutline className="icon" />
                  <span className="bottomUserInfoTitle">
                    kellyncodes@gmail.com
                  </span>
                </div>
                <div className="userInfo">
                  <MdOutlinePhoneAndroid className="icon" />
                  <span className="bottomUserInfoTitle">+2349157060998</span>
                </div>
                <div className="userInfo">
                  <BsFillCalendar2MinusFill className="icon" />
                  <span className="bottomUserInfoTitle">16/10/2022</span>
                </div>
                <div className="userInfo">
                  <MdOutlineLocationSearching className="icon" />
                  <span className="bottomUserInfoTitle">Enugu Nigeria</span>
                </div>
              </div>
            </div>
            <div className="updateUser">
              <span className="userUpdateTitle">Edit</span>
              <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label htmlFor="Username">Username</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      placeholder="KellynCodes"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="Fullname">Fullname</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      placeholder="Kelechi Amos Omeh"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      placeholder="KellynCodes@gmail.com"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="Phone">Phone</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      placeholder="+2349157060998"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="Date">Date</label>
                    <input
                      type="date"
                      className="userUpdateInput"
                      placeholder="09/10/2022"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="Address">Address</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      placeholder="New York City"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateAvater">
                    <img
                      className="uploadAvater"
                      src="https://avatars.githubusercontent.com/u/104645889?v=4"
                      alt="Avater"
                    />
                    <label htmlFor="file">
                      <MdOutlinePublishedWithChanges className="userUpdateIcon" />
                    </label>
                    <input
                      type="file"
                      name=""
                      id="file"
                      style={{ display: "none" }}
                    />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
