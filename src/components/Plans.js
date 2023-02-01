import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";

const Plans = () => {
  const { isMonthly, isQuarterly, isYearly } = useContext(AuthContext);

  return (
    <div>
      <div className=" mb-[5rem] flex justify-between items-start">
        <div className=" shadow-lg w-[20rem] grid rounded">
          <p className=" text-center text-white bg-text-green rounded py-[0.5rem] text-3xl">
            Basic
          </p>
          <p className=" text-center m-[1rem]">
            Get started with essential features
          </p>
          <div className=" text-center mb-[1rem]">
            {isMonthly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦2,000</h1>
            )}
            {isQuarterly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦6,000</h1>
            )}
            {isYearly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦24,000</h1>
            )}
            <small>per month</small>
          </div>
          <ul className=" pl-[3rem] text-lg">
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">1 Branch</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">2 Users</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Dashboard</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Audio consultation</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Video and chat consultation</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Schedule appointments</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Receive e-prescriptions</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Order Tracking</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Inventory</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Management (Limited)</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Email (100 monthly emails)</span>
            </li>
          </ul>

          <button className=" bg-gradient-to-r from-grad-light to-grad-dark text-white py-3 mx-[2rem] rounded text-xl active:ring focus:ring reen mt-3 mb-10 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold">
            Choose Plan
          </button>
        </div>
        <div className=" shadow-lg w-[20rem] grid items-start rounded">
          <p className=" text-center text-white bg-grad-dark rounded py-[0.5rem] text-3xl">
            Advanced
          </p>
          <p className=" text-center m-[1rem]">
            More branches and users? Try our advanced features
          </p>
          <div className=" text-center mb-[1rem]">
            {isMonthly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦10,000</h1>
            )}
            {isQuarterly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦30,000</h1>
            )}
            {isYearly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦120,000</h1>
            )}
            <small>per month</small>
          </div>
          <ul className=" pl-[3rem] text-lg">
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Basic Features +</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Up to 5 Branches</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Up to 10 Users</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Audit Logs</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Reporting</span>
            </li>
          </ul>

          <button className=" bg-gradient-to-r from-grad-light to-grad-dark text-white py-3 mx-[2rem] rounded text-xl active:ring focus:ring reen mt-3 mb-10 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold">
            Choose Plan
          </button>
        </div>

        <div className=" shadow-lg w-[20rem] grid items-start rounded">
          <p className=" text-center text-white bg-grad-dark rounded py-[0.5rem] text-3xl">
            Premium
          </p>
          <p className=" text-center m-[1rem]">
            Scale up with our premium plan
          </p>
          <div className=" text-center mb-[1rem]">
            {isMonthly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦20,000</h1>
            )}
            {isQuarterly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦60,000</h1>
            )}
            {isYearly && (
              <h1 className="font-bold text-4xl text-grad-dark">₦240,000</h1>
            )}
            <small>per month</small>
          </div>
          <ul className=" pl-[3rem] text-lg">
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Advanced Features +</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Up to 10 Branches</span>
            </li>
            <li className=" list-disc text-text-green mb-[10px]">
              <span className=" text-black">Up to 20 Users</span>
            </li>
          </ul>

          <button className=" bg-gradient-to-r from-grad-light to-grad-dark text-white py-3 mx-[2rem] rounded text-xl active:ring focus:ring reen mt-3 mb-10 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold">
            Choose Plan
          </button>
        </div>

        <div className=" shadow-lg w-[20rem] grid items-start rounded">
          <p className=" text-center text-white bg-text-green rounded py-[0.5rem] text-3xl">
            Enterprise
          </p>
          <p className=" text-center my-[1rem] text-xl mx-[1rem] text-text-green">
            Need wider coverage and don't fit into any of our subscription
            plans? Please contact us for pricing
          </p>

          <button className=" bg-gradient-to-r from-grad-light to-grad-dark text-white py-3 mx-[2rem] rounded text-xl active:ring focus:ring reen mt-3 mb-10 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
