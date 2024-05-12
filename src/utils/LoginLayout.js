import React, { memo, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import Spalsh from "../components/Spalsh";
import NavBar from "../components/navBar/navbar";
import MyFooter from "../components/footer/footer";


const LoginLayout = () => {
  const token = localStorage.getItem("token");

    const [isLoadingSplash, SetIsLoadingSplash]= useState(false)


  return !token ? (
    <>
     {/* {isLoadingSplash && <Spalsh/>}  */}
    <NavBar/>
    <Outlet />
    <MyFooter/>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default memo(LoginLayout);
