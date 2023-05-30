import React, { useState } from "react";
import Link from "next/link";
import Topbar from "@/components/topbars/Topbar";
import SideBar from "@/components/sidebar/SideBar";
import { ProductRows } from "@/DummyData";

const index = () => {
  const [data, setData] = useState(ProductRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const ProductColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },

    {
      field: "product",
      headerName: "Product",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListContainer">
            <img
              className="ProductListImg"
              src={params.row.img}
              alt="Users Avater"
            />
            <h4>{params.row.name}</h4>
          </div>
        );
      },
    },

    {
      field: "stock",
      headerName: "Stock",
      width: 100,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
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
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard/products/${params.row.id}`}>
              <button className="productListEditButton">Edit</button>
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
      <div className="productListContainer">
        <SideBar />
        <div className="productList">
          {/* <DataGrid
            rows={data}
            columns={ProductColumns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
          /> */}
          Product List.
        </div>
      </div>
    </>
  );
};

export default index;
