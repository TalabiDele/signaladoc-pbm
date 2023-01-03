import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import patient from "../imgs/lovePlus.png";
import doctor from "../imgs/doc.png";
import drug from "../imgs/aid.png";
import cart from "../imgs/cartblue.png";
import ConsultModal from "./ConsultModal";

const DashCard = () => {
  const {
    isConsult,
    setIsConsult,
    isInventory,
    setIsInventory,
    isSale,
    setIsSale,
  } = useContext(AuthContext);

  return (
    <>
      {isConsult && <ConsultModal />}

      <div>
        <div className=" flex justify-between w-full text-center relative">
          <div
            className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center cursor-pointer"
            onClick={() => setIsConsult(true)}
          >
            <p className=" text-text-green text-xl mb-2">Consult a Doctor</p>
            <img src={doctor} alt="" />
          </div>
          <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center cursor-pointer">
            <p className=" text-text-blue text-xl mb-2">New Sale</p>
            <img src={cart} alt="" />
          </div>
          <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center cursor-pointer">
            <p className=" text-text-green text-xl mb-2">
              Add new drug to inventory
            </p>
            <img src={drug} alt="" />
          </div>
          <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center cursor-pointer">
            <p className=" text-text-blue text-xl mb-2">Message a Patient</p>
            <img src={patient} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
