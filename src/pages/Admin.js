import React from "react";
import AdminLogin from "../components/Admin/AdminLogin";
import AdminDash from "../components/Admin/AdminDash";
import { useSelector } from "react-redux";

const Admin = () => {
  const adminLoggedIn = useSelector((state) => state.adminAuth.isLoggedIn);
  return !adminLoggedIn ? <AdminLogin /> : <AdminDash />;
};

export default Admin;
