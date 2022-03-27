import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Card from "@mui/material/Card";

export default function OrdersTable() {
  return (
    <div style={{padding: "1rem"}}>
      <h1>Place and follow your orders' status</h1>
      <Card style={{ height: "auto", width: "100%" }}>
        <DataGrid autoHeight  rows={fakeOrders} columns={columns} />
      </Card>
    </div>
  );
}

const fakeOrders: GridRowsProp = [

  //change some of the orders status to "delivered"
  {
    id: 1,
    title: "Order 1",
    description: "This is the first order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 2,
    title: "Order 2",
    description: "This is the second order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 3,
    title: "Order 3",
    description: "This is the third order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 4,
    title: "Order 4",
    description: "This is the fourth order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 5,
    title: "Order 5",
    description: "This is the fifth order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 6,
    title: "Order 6",
    description: "This is the sixth order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 7,
    title: "Order 7",
    description: "This is the seventh order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
  {
    id: 8,
    title: "Order 8",
    description: "This is the eighth order",
    status: "pending",
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01",
  },
];

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 100,
  },
];
