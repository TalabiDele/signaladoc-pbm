import React from "react";
import logo from "../imgs/pbm-logo.png";
import vector from "../imgs/account_img.png";

const AccountNav = () => {
  return (
    <div className="w-[50%] h-[100vh] pt-[2rem] pl-20">
      <img src={logo} alt="" />
      <div className="h-[80vh] grid items-center">
        <img src={vector} alt="" className=" w-[45rem]" />
      </div>
    </div>
  );
};

export default AccountNav;
