import React from "react";
import SidBar from "../../sidebar/SidBar";
import Topbar from "../../topbars/Topbar";
const NewUser = () => {
  return (
    <>
      <Topbar />

      <div className="newUserContainer">
        <SidBar />
        <div className="newProduct">
          <h2 className="newUserTitle">New Product</h2>
          <form className="newProductForm" action="">
            <div className="newUserItem">
              <label htmlFor="image">Image</label>
              <input id="image" type="file" />
            </div>

            <div className="newUserItem">
              <label htmlFor="name">name</label>
              <input id="name" type="name" placeholder="Iphone 13 Pro Max" />
            </div>
            <div className="newUserItem">
              <label htmlFor="active">Active</label>
              <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="newProductButton">Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;
