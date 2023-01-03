import React, { useContext, useState } from "react";
import { RiHeartAddFill } from "react-icons/ri";
import AuthContext from "../Context/AuthContext";
import btnLoader from "../imgs/loading.gif";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ConsultModal = () => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [isPatient, setIsPatient] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const { isConsult, setIsConsult, loading } = useContext(AuthContext);

  const handleEmail = (e) => {
    e.preventDefault();

    setStepTwo(true);
  };

  const handleVerify = (e) => {
    e.preventDefault();

    setIsPatient(true);
  };

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div className=" fixed h-[100vh] w-[100%] bg-black/[0.3] left-0 top-0 z-[100] grid items-center">
      <div className="relative bg-white rounded-xl w-[40rem] mx-auto p-[2rem]">
        {isPatient && <p className="text-2xl mb-[2rem]">Patient Symptoms</p>}
        <div
          className=" font-bold text-2xl absolute right-[2rem] top-[1rem] cursor-pointer text-black"
          onClick={() => setIsConsult(false)}
        >
          X
        </div>
        <div className="flex justify-between w-[12rem]">
          <div className="bg-text-green h-[0.5rem] w-[5rem]"></div>
          <div
            className={
              stepTwo
                ? "bg-text-green h-[0.5rem] w-[5rem]"
                : "bg-input-green h-[0.5rem] w-[5rem]"
            }
          ></div>
        </div>
        <div className=" mt-[4rem] mb-[4rem]">
          {stepOne && (
            <form
              action=""
              onSubmit={handleEmail}
              className={stepTwo ? "hidden" : "block"}
            >
              <label htmlFor="email">
                Patient email address or phone number
              </label>
              <input
                type="text"
                className="rounded-lg bg-input-green mt-3 mb-2 p-5 focus:outline-none focus:ring focus:ring-text-green w-full"
              />
              <button
                disabled={loading ? true : false}
                className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-[20rem]`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  <div className="flex items-center justify-center">
                    Continue
                  </div>
                )}
              </button>
            </form>
          )}
          {stepTwo && (
            <form
              action=""
              className={isPatient ? "hidden" : "block"}
              onSubmit={handleVerify}
            >
              <label htmlFor="email">
                Enter verification code sent to email or phone
              </label>
              <input
                type="number"
                className="rounded-lg bg-input-green mt-3 mb-2 p-5 focus:outline-none focus:ring focus:ring-text-green w-full"
              />
              <button
                disabled={loading ? true : false}
                className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-[20rem]`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  <div className="flex items-center justify-center">
                    Continue
                  </div>
                )}
              </button>
            </form>
          )}

          {isPatient && (
            <form action="">
              <label htmlFor="symptoms">What symptoms are you feeling?</label>
              <div className=" relative">
                <input
                  id="symptoms"
                  name="symptoms"
                  type="text"
                  className="rounded-lg bg-input-green mt-3 mb-2 p-5 focus:outline-none focus:ring focus:ring-text-green w-full"
                />
                {isDropdown ? (
                  <BiChevronUp
                    className="absolute text-5xl cursor-pointer top-[1rem] right-[1rem]"
                    onClick={() => handleDropdown()}
                  />
                ) : (
                  <BiChevronDown
                    className="absolute text-5xl cursor-pointer top-[1rem] right-[1rem]"
                    onClick={() => handleDropdown()}
                  />
                )}

                <div className=""></div>
              </div>

              <label htmlFor=""></label>

              <button
                disabled={loading ? true : false}
                className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-[20rem]`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  <div className="flex items-center justify-center">
                    Continue
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultModal;
