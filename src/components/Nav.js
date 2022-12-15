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
    <div className="fixed right-0 left-0 flex">
      <div className=" bg-white h-[100vh] w-[20rem] pt-2">
        <div className=" py-5 pl-[3rem]">
          <img src={logo} alt="" className="w-[10rem]  bg-white" />
        </div>
        <div
          className={` ${
            location.pathname === "/dashboard"
              ? "bg-bg-light border-l-[0.4rem] border-text-green"
              : "bg-white"
          } py-5`}
        >
          <Link
            to="/dashboard"
            className={` flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <HiSquares2X2
              className={`${
                location.pathname === "/dashboard"
                  ? " text-text-green"
                  : "text-black"
              } text-3xl mr-[2rem]`}
            />{" "}
            <p>Dashboard</p>
          </Link>
        </div>
        <div
          className={` ${
            location.pathname === "/consultations"
              ? "bg-bg-light border-l-[0.4rem] border-text-green"
              : "bg-white"
          } py-5`}
        >
          <Link
            to="/consultations"
            className={` flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <RiHeartAddLine
              className={`${
                location.pathname === "/consultations"
                  ? " text-text-green"
                  : "text-black"
              } text-3xl mr-[2rem]`}
            />{" "}
            <p>Consultations</p>
          </Link>
        </div>
        <div
          className={` ${
            location.pathname === "/inventory"
              ? "bg-bg-light border-l-[0.4rem] border-text-green"
              : "bg-white"
          } py-5`}
        >
          <Link
            to="/inventory"
            className={` flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <BiFirstAid
              className={`${
                location.pathname === "/inventory"
                  ? " text-text-green"
                  : "text-black"
              } text-3xl mr-[2rem]`}
            />{" "}
            <p>Inventory</p>
          </Link>
        </div>
        <div
          className={` ${
            location.pathname === "/orders"
              ? "bg-bg-light border-l-[0.4rem] border-text-green"
              : "bg-white"
          } py-5`}
        >
          <Link
            to="/orders"
            className={` flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <MdAddShoppingCart
              className={`${
                location.pathname === "/orders"
                  ? " text-text-green"
                  : "text-black"
              } text-3xl mr-[2rem]`}
            />{" "}
            <p>Orders</p>
          </Link>
        </div>
        <div
          className={` ${
            location.pathname === "/transactions"
              ? "bg-bg-light border-l-[0.4rem] border-text-green"
              : "bg-white"
          } py-5`}
        >
          <Link
            to="/transactions"
            className={` flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <FaHandHoldingUsd
              className={`${
                location.pathname === "/transactions"
                  ? " text-text-green"
                  : "text-black"
              } text-3xl mr-[2rem]`}
            />{" "}
            <p>Transactions</p>
          </Link>
        </div>
        <div
          className={` ${
            location.pathname === "/settings"
              ? "bg-bg-light border-l-[0.4rem] border-text-green"
              : "bg-white"
          } py-5`}
        >
          <Link
            to="/settings"
            className={` flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <VscSettingsGear
              className={`${
                location.pathname === "/settings"
                  ? " text-text-green"
                  : "text-black"
              } text-3xl mr-[2rem]`}
            />{" "}
            <p>Settings</p>
          </Link>
        </div>

        <div className={` mt-[3rem] py-5`}>
          <Link
            // to="/settings"
            className={` text-text-red flex items-center w-[100%] ml-[3rem] text-xl`}
          >
            <MdLogout className={` text-3xl mr-[2rem]`} /> <p>Logout</p>
          </Link>
        </div>
      </div>

      <div className="  w-[100%] mt-[2rem]">
        <div className=" flex items-center justify-between w-[95%] mx-auto">
          <h1 className="text-xl font-medium">Welcome to your dashboard</h1>
          <div className=" flex w-2/4">
            <div className=" relative w-4/5">
              <input
                type="text"
                placeholder="Search patient profile "
                className="bg-white shadow-sm rounded-md px-5 py-3 w-full focus:ring focus:outline-none focus:ring-text-green"
              />
              <HiOutlineSearch className=" absolute right-3 top-2 text-3xl text-[#4F4F4F]" />
            </div>
            <VscBell className=" text-5xl bg-bg-green p-2 rounded-md ml-4" />
          </div>
          <img src={userImg} alt="" className="w-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
