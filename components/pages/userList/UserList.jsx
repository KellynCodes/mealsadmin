import React, { useState } from "react";
import SidBar from "../../sidebar/SidBar";
import { DataGrid } from "@material-ui/data-grid";
import { UserRows } from "../../../../DummyData";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Topbar from "../../topbars/Topbar";

const UserList = () => {
  const [data, setData] = useState(UserRows);
  const handleDelete = (id, data) => {
    setData(data.filter((item) => item.id !== id));
  };
  const UserColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },

    {
      field: "username",
      headerName: "Username",
      width: 100,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUserContainer">
            <img
              className="userListUserImg"
              src={params.row.avater}
              alt="Users Avater"
            />
            <h4>{params.row.username}</h4>
          </div>
        );
      },
    },
    {
      field: "avater",
      headerName: "Avater",
      width: 100,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      editable: true,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      type: "number",
      width: 100,
      editable: true,
    },

    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard/users/${params.row.id}`}>
              <button className="userListEditButton">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDeletButton"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="userListWrapper">
        <SidBar />
        <div className="userList">
          <DataGrid
            rows={data}
            columns={UserColumns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
};

export default UserList;
