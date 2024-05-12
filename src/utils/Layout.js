import React, { memo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ischeckCoupon } from "./auth";



const Layout = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
    <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default memo(Layout);
