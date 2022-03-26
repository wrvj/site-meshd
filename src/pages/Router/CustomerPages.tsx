import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomerDashboard from "../CustomerPrivateArea/CustomerDashboard";

export default function CustomerPages() {
  return (
    <>
      <Routes>
        <Route path='dashboard' element={<CustomerDashboard />} />
      </Routes>
    </>
  );
}
