import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

const Steps = () => {
  const {
    isEmail,
    setIsEmail,
    isCode,
    isUserDetails,
    isFee,
    setIsFee,
    isPharmacy,
    isBranch,
  } = useContext(AuthContext);

  useEffect(() => {
    setIsEmail(true);
    // setIsUserDetails(true);
  }, []);

  return (
    <div>
      <div className=" mb-10 flex justify-between w-[50%] mx-auto">
        <div className=" text-center">
          <p
            className={` ${
              isEmail || isCode || isUserDetails
                ? "text-grad-light"
                : "text-input-green"
            } font-bold text-xl `}
          >
            1
          </p>
          <div
            className={`${
              isEmail || isCode || isUserDetails
                ? "bg-gradient-to-r from-grad-light to-grad-light"
                : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
            }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
          ></div>
        </div>
        <div className="text-center">
          <p
            className={` ${
              isCode || isFee ? "text-grad-light" : "text-input-green"
            } font-bold text-xl `}
          >
            2
          </p>
          <div
            className={`${
              isCode || isFee
                ? "bg-gradient-to-r from-grad-light to-grad-light"
                : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
            }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
          ></div>
        </div>

        <div className="text-center">
          <p
            className={` ${
              isPharmacy ? "text-grad-light" : "text-input-green"
            } font-bold text-xl `}
          >
            3
          </p>
          <div
            className={`${
              isPharmacy
                ? "bg-gradient-to-r from-grad-light to-grad-light"
                : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
            }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
          ></div>
        </div>
        <div className="text-center">
          <p
            className={` ${
              isBranch ? "text-grad-light" : "text-input-green"
            } font-bold text-xl `}
          >
            4
          </p>
          <div
            className={`${
              isBranch
                ? "bg-gradient-to-r from-grad-light to-grad-light"
                : "bg-gradient-to-r from-white to-white text-grad-light opacity-50"
            }  text-white font-medium text-xl h-[4px] rounded-3xl w-[5rem] text-center `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
