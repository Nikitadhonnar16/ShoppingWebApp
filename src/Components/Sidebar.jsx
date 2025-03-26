import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineViewList,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={` h-src transition-all duration-300 bg-gray-800 text-white border-t-2 border-t-gray-800 ${
        isCollapsed ? "w-[80px]" : "w-[20%]"
      }`}
    >
      <div className="mx-7">
        {/* Header Section */}
        <div className="flex justify-between items-center cursor-pointer">
          {!isCollapsed && <h3 className="text-2xl mt-4">Sidebar</h3>}
          <button onClick={toggleSidebar} className="mt-5 cursor-pointer">
            {isCollapsed ? (
              <MdKeyboardDoubleArrowRight size={27} />
            ) : (
              <MdKeyboardDoubleArrowLeft size={27} />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`flex flex-col gap-6 mt-8 text-lg cursor-pointer ${
            isCollapsed ? "items-center" : ""
          }`}
        >
          <Link to="/" className=" flex items-center cursor-pointer">
            <HiOutlineHome size={25} />
            {!isCollapsed && (
              <label className="ml-6 cursor-pointer">Home</label>
            )}
          </Link>
          <Link to="/about" className="flex items-center cursor-pointer">
            <HiOutlineUser size={25} />

            {!isCollapsed && (
              <label className="ml-6 cursor-pointer">About</label>
            )}
          </Link>
          <Link to="/" className="flex items-center cursor-pointer">
            <HiOutlineShoppingCart size={25} />
            {!isCollapsed && <label className="ml-6 cursor-pointer">Buy</label>}
          </Link>
          <Link to="/categories" className="flex items-center cursor-pointer">
            <HiOutlineViewList size={25} />
            {!isCollapsed && (
              <label className="ml-6 cursor-pointer">Categories</label>
            )}
          </Link>
          <Link to="/contact" className="flex items-center cursor-pointer">
            <HiOutlinePhone size={25} />
            {!isCollapsed && (
              <label className="ml-6 cursor-pointer">Contact</label>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
