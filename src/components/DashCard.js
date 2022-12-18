import React from "react";
import patient from "../imgs/person-circle-plus.png";
import doctor from "../imgs/doctor.png";
import drug from "../imgs/aid.png";
import cart from "../imgs/cart.png";

const DashCard = () => {
  return (
    <div>
      <div className=" flex justify-between w-full">
        <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center">
          <p className=" text-btn-green text-xl mb-2">
            Create a patient profile
          </p>
          <img src={patient} alt="" />
        </div>
        <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center">
          <p className=" text-text-blue text-xl mb-2">Consult a doctor</p>
          <img src={doctor} alt="" />
        </div>
        <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center">
          <p className=" text-text-green text-xl mb-2">
            Add new drug to inventory
          </p>
          <img src={drug} alt="" />
        </div>
        <div className=" shadow-lg px-[2rem] py-[4rem] w-[20%] bg-white rounded-xl grid justify-items-center">
          <p className=" text-text-blue text-xl mb-2">Prescribed Orders</p>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashCard;
