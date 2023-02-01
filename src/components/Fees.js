import React, { useState, useEffect, useContext } from "react";
import logo from "../imgs/pbm-logo.png";
import Steps from "./Steps";
import AuthContext from "../Context/AuthContext";
import Plans from "./Plans";

const Fees = () => {
  const {
    isMonthly,
    setIsMonthly,
    isQuarterly,
    setIsQuarterly,
    isYearly,
    setIsYearly,
  } = useContext(AuthContext);

  const handleMonthly = () => {
    setIsMonthly(true);
    setIsQuarterly(false);
    setIsYearly(false);
  };

  const handleQuarterly = () => {
    setIsMonthly(false);
    setIsQuarterly(true);
    setIsYearly(false);
  };

  const handleYearly = () => {
    setIsMonthly(false);
    setIsQuarterly(false);
    setIsYearly(true);
  };

  return (
    <div>
      <div className=" flex mt-[2rem]">
        <img src={logo} alt="Pharmacy logo" className=" fixed" />

        <div className=" w-full mx-auto">
          <h1 className=" font-bold text-2xl text-center">
            Pick The Best Plan For Your Business
          </h1>
          <div className="flex w-[50%] mx-auto justify-between mt-[1rem] items-center text-center">
            <p className=" text-xl">Choose a plan tailored to your needs</p>
            <div className=" border-[1px] rounded border-text-green border-solid p-[3px] text-white shadow-lg">
              <button
                className={
                  isMonthly
                    ? " bg-text-green rounded py-[0.5rem] px-[1rem]"
                    : " py-[0.5rem] px-[1rem] pl-[1rem] text-text-green"
                }
                onClick={handleMonthly}
              >
                Monthly
              </button>
              <button
                className={
                  isQuarterly
                    ? " bg-text-green rounded py-[0.5rem] px-[1rem] pl-[1rem] border-left-[1px] border-text-green border-solid ml-[1rem]"
                    : " py-[0.5rem] px-[1rem] pl-[1rem] text-text-green pl-[1rem] border-left-[1px] border-text-green border-solid ml-[1rem]"
                }
                onClick={handleQuarterly}
              >
                Quarterly
              </button>
              <button
                className={
                  isYearly
                    ? " bg-text-green rounded py-[0.5rem] px-[1rem] pl-[1rem] border-left-[1px] border-text-green border-solid ml-[1rem]"
                    : " py-[0.5rem] px-[1rem] pl-[1rem] text-text-green pl-[1rem] border-left-[1px] border-text-green border-solid ml-[1rem]"
                }
                onClick={handleYearly}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className=" mt-[2rem] w-[60%] mx-auto">
            <Steps />
          </div>

          <Plans />
        </div>
      </div>
    </div>
  );
};

export default Fees;
