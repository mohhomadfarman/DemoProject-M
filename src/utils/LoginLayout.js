import React, { memo, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/navBar/navbar";
import MyFooter from "../components/footer/footer";
import ScrollToTop from "../components/ScrollToTop";


const LoginLayout = () => {
  const token = localStorage.getItem("token");



  return !token ? (
    <>
    <ScrollToTop/>
    <NavBar/>
    <Outlet />
    <MyFooter/>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default memo(LoginLayout);
