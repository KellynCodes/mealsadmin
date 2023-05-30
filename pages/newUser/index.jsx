import SideBar from "@/components/sidebar/SideBar";
import Topbar from "@/components/topbars/Topbar";
import React from "react";
const index = () => {
  return (
    <>
      <Topbar />

      <div className="newUserContainer">
        {/* <SideBar /> */}
        <div className="newUser">
          <h2 className="newUserTitle">New User</h2>
          <form className="newUserForm" action="">
            <div className="newUserItem">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="KellynCodes" />
            </div>
            <div className="newUserItem">
              <label htmlFor="fullname">Fullname</label>
              <input
                id="fullname"
                type="text"
                placeholder="Kelechi Amos Omeh"
              />
            </div>
            <div className="newUserItem">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="kellyncodes@gmail.com"
              />
            </div>
            <div className="newUserItem">
              <label htmlFor="pasword">Password</label>
              <input id="password" type="password" placeholder="1234567890" />
            </div>
            <div className="newUserItem">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="number" placeholder="+2349157060998" />
            </div>
            <div className="newUserItem">
              <label htmlFor="address">Address</label>
              <input id="address" type="text" placeholder="Nigeria" />
            </div>
            <div className="newUserItem">
              <label htmlFor="">Gender</label>
              <div className="newUserGender">
                <input id="male" type="radio" value="Male" />
                <label htmlFor="male">Male</label>

                <input id="female" type="radio" value="Female" />
                <label htmlFor="female">Female</label>

                <input id="others" type="radio" value="Others" />
                <label htmlFor="others">Others</label>
              </div>
            </div>
            <div className="newUserItem">
              <label htmlFor="active">Active</label>
              <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="newUserButton">Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
