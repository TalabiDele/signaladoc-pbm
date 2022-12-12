import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

const Steps = () => {
  const {
    isEmail,
    setIsEmail,
    isCode,
    setIsCode,
    isUserDetails,
    setIsUserDetails,
  } = useContext(AuthContext);

  useEffect(() => {
    setIsEmail(true);
    // setIsUserDetails(true);
  }, []);

  return (
    <div>
      <div className=" mb-10 flex justify-between w-[35%] mx-auto">
        <div
          className={`${
            isEmail || isCode || isUserDetails
              ? "bg-gradient-to-r from-grad-light to-grad-light"
              : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
          }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
        ></div>
        <div
          className={`${
            isCode || isUserDetails
              ? "bg-gradient-to-r from-grad-light to-grad-light"
              : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
          }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
        ></div>
        <div
          className={`${
            isUserDetails
              ? "bg-gradient-to-r from-grad-light to-grad-light"
              : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
          }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
        ></div>
      </div>
    </div>
  );
};

export default Steps;
