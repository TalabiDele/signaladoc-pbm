import React, { useState, useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";

const Orders = () => {
  const [isAll, setIsAll] = useState(true);
  const [isFulfilled, setIsFulfilled] = useState(false);
  const [isReject, setIsReject] = useState(false);
  const [isPending, setIsPending] = useState(false);

  return (
    <div>
      <div className=" mt-[3rem]">
        <ul className="flex justify-between w-[40%]">
          <li className=" text-lg ">All Orders</li>
          <li className=" text-lg ">Fulfilled Orders</li>
          <li className=" text-lg ">Rejected Orders</li>
          <li className=" text-lg ">Pending Orders</li>
        </ul>

        <div className=" shadow-lg rounded-xl bg-white mt-5 ">
          <div className=" flex justify-between items-center pt-5 pr-10 pl-10 mb-5">
            <button className="  flex items-center bg-gradient-to-r from-grad-light to-grad-dark text-white py-[0.5rem] px-[1rem] rounded-lg text-xl active:ring focus:ring focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all">
              <AiOutlineShoppingCart className=" mr-2" /> New Order
            </button>
            <p className=" text-text-orange text-2xl">5 Orders</p>
          </div>

          <div className=" bg-bg-green">
            <ul className=" grid justify-items-center grid-cols-9 px-10 py-5 text-center">
              <li className="">No.</li>
              <li className="">Order ID</li>
              <li className="">Patient ID</li>
              <li className="">Date</li>
              <li className="">Time</li>
              <li className="">Amount</li>
              <li className="">Staff</li>
              <li className="">Download</li>
              <li className="">Status</li>
            </ul>
          </div>

          {isAll && (
            <div className=" px-10 py-5">
              <div className=" grid justify-items-center grid-cols-9 items-center mb-5">
                <p className="font-bold">1.</p>
                <p className="">B-0397120K</p>
                <p className="">B-0397120K</p>
                <p className="">Nov 4th</p>
                <p className="">8:30:19 AM</p>
                <p className="">---</p>
                <p className="">---</p>
                <p className=" cursor-pointer">
                  <HiOutlineDownload />
                </p>
                <p className=" text-text-orange font-bold p-4 rounded-lg ">
                  Pending
                </p>
              </div>
              <div className=" grid justify-items-center grid-cols-9 items-center mb-5">
                <p className="font-bold">2.</p>
                <p className="">B-0397120K</p>
                <p className="">B-0397120K</p>
                <p className="">Nov 4th</p>
                <p className="">8:30:19 AM</p>
                <p className="">---</p>
                <p className="">---</p>
                <p className=" cursor-pointer">
                  <HiOutlineDownload />
                </p>
                <p className=" text-text-orange font-bold p-4 rounded-lg ">
                  Pending
                </p>
              </div>
              <div className=" grid justify-items-center grid-cols-9 items-center mb-5">
                <p className="font-bold">3.</p>
                <p className="">B-0397120K</p>
                <p className="">B-0397120K</p>
                <p className="">Nov 4th</p>
                <p className="">8:30:19 AM</p>
                <p className="">---</p>
                <p className="">---</p>
                <p className=" cursor-pointer">
                  <HiOutlineDownload />
                </p>
                <p className=" text-text-orange font-bold p-4 rounded-lg ">
                  Pending
                </p>
              </div>
              <div className=" grid justify-items-center grid-cols-9 items-center mb-5">
                <p className="font-bold">4.</p>
                <p className="">B-0397120K</p>
                <p className="">B-0397120K</p>
                <p className="">Nov 4th</p>
                <p className="">8:30:19 AM</p>
                <p className="">---</p>
                <p className="">---</p>
                <p className=" cursor-pointer">
                  <HiOutlineDownload />
                </p>
                <p className=" text-text-orange font-bold p-4 rounded-lg ">
                  Pending
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
