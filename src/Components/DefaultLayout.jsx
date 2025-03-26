import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const DefaulytLayout = ({ children }) => {
  return (
  <>
    <Navbar/>
    <div className='flex'>
        <Sidebar/>
        <Outlet /> 
    </div>
  </>
  );
};

export default DefaulytLayout;
