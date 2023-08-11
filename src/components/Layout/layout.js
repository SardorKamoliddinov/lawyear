import React from "react";
import Navbar from "../Navbar/navbar";
import classess from "./layout.module.scss";
import Showcase from "../Showcase/showcase";
import Card from "../Cards/card";
import History from "../History/history";
import Material from "../Material/material";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className={classess.wrapper}>
        <Navbar />
      </div>
      {/* <Showcase />
      <Card />
      <History />
      <Material/> */}
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
