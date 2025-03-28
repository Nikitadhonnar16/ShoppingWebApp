import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { MainContent } from "./MainContent";
const Layout = ({ children }) => {
  return (
  <>
    <Navbar/>
    <div className='flex'>
        <Sidebar/>
      {children}
    </div>
  </>
  );
};

export default Layout;
