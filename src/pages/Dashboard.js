import React from "react";
import DashCard from "../components/DashCard";
import Orders from "../components/Orders";

const Dashboard = () => {
  return (
    <div className=" relative ml-[20rem] py-[7rem] mr-[2rem]">
      <DashCard />
      <Orders />
    </div>
  );
};

export default Dashboard;
