import React from "react";
import logo from "../imgs/pbm-logo.png";
import userImg from "../imgs/user-img.png";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { VscBellDot, VscBell, VscSettingsGear } from "react-icons/vsc";
import { FaUserMd, FaHandHoldingUsd } from "react-icons/fa";
import { BiFirstAid } from "react-icons/bi";
import { MdAddShoppingCart, MdLogout } from "react-icons/md";
import { RiHeartAddLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="fixed right-0 left-0 mt-[1rem]">
      <div className="  ">
        <div className=" flex items-center justify-between w-[95%] mx-auto">
          <img src={logo} alt="" />
          <h1 className="text-xl font-medium">Welcome to your dashboard</h1>
          <div className=" flex w-2/4">
            <div className=" relative w-4/5">
              <input
                type="text"
                placeholder="Search patient profile "
                className="bg-bg-green rounded-md px-5 py-3 w-full focus:ring focus:outline-none focus:ring-text-green"
              />
              <HiOutlineSearch className=" absolute right-3 top-2 text-3xl text-[#4F4F4F]" />
            </div>
            <VscBell className=" text-5xl bg-bg-green p-2 rounded-md ml-4" />
          </div>
          <img src={userImg} alt="" className="w-[5rem]" />
        </div>
      </div>

      <div className=" ">
        <Link className=" flex items-center text-2xl">
          <HiSquares2X2 className="" /> Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Nav;
