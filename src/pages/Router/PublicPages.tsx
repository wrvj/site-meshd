import React from "react";
import Home from "../Home";
import About from "../About";
import Work from "../Work";
import Order from "../Order";
import Contact from "../Contact";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { Routes, Route } from "react-router-dom";
import CustomerLoginSignup from "../CustomerPrivateArea/CustomerLoginSignup";
import NotFound from "../NotFound/NotFound";

export default function PublicPages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order" element={<Order />} />
        <Route path="login" element={<CustomerLoginSignup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
