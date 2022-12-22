import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import AccountNav from "./AccountNav";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import btnLoader from "../imgs/loading.gif";
import { useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";

const Forgot = () => {
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [code, setCode] = useState(null);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");

  const history = useNavigate();

  const {
    loading,
    error,
    message,
    approved,
    email,
    setEmail,
    forgotPassword,
    isCode,
    emailCode,
    setLoading,
    setError,
    setMessage,
    setApproved,
    setIsCode,
    codeResend,
    userId,
    forgotResend,
    isReset,
    setIsReset,
    resetPassword,
  } = useContext(AuthContext);

  const handleForgot = (e) => {
    e.preventDefault();
    forgotPassword({ email });
  };

  const verifyCode = (e) => {
    e.preventDefault();

    console.log(emailCode);
    console.log(code);
    setLoading(true);

    if (emailCode !== code) {
      setError(true);
      setMessage("Incorrect code. Check your mail or resend code");

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 3000);

      setLoading(false);
    } else if (emailCode === "") {
      setError(true);
      setMessage("Enter code sent to your mail");

      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 3000);
      setLoading(false);
    } else {
      setMessage("Email verified!");
      setApproved(true);

      setTimeout(() => {
        setIsCode(false);
        // setIsUserDetails(true);

        setApproved(false);
        setMessage("");
        setIsReset(true);
      }, 4000);
      setLoading(false);
    }

    setLoading(false);
  };

  const resendCode = (e) => {
    e.preventDefault();

    forgotResend({ id: userId });
  };

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword({ password, userId, history });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {isCode && (
        <div className=" fixed w-[100%] h-[100vh] bg-[#1616167a] grid items-center">
          <div
            action=""
            className="grid bg-white w-[60%] p-20 mx-auto rounded-lg item-center"
          >
            {error && message && (
              <div
                className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                role="alert"
              >
                <p>{message}</p>
              </div>
            )}

            {approved && message && (
              <div
                className={` bg-input-green border-t-4 border-grad-light rounded-b text-teal-900 px-4 py-3 shadow-md mb-5"
              role="alert`}
              >
                <div className="">
                  <div>
                    <p className="text-sm">{message}</p>
                  </div>
                </div>
              </div>
            )}
            <label htmlFor="code">Enter Verification Code</label>
            <input
              id="code"
              name="code"
              type="number"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
            />
            <div className="flex w-full">
              <button
                onClick={(e) => verifyCode(e)}
                disabled={loading ? true : false}
                className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-2/6 mr-10`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  "Verify Code"
                )}
              </button>
              <button
                onClick={(e) => resendCode(e)}
                disabled={loading ? true : false}
                className={` bg-[#ccc] text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:bg-[#dddddd] transition-500 transition-all font-bold w-2/6`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  "Resend Code"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {isReset && (
        <div className=" fixed w-[100%] h-[100vh] bg-[#1616167a] grid items-center">
          <div
            action=""
            className="grid bg-white w-[60%] p-20 mx-auto rounded-lg item-center"
          >
            {error && message && (
              <div
                className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                role="alert"
              >
                <p>{message}</p>
              </div>
            )}

            {approved && message && (
              <div
                className={` bg-input-green border-t-4 border-grad-light rounded-b text-teal-900 px-4 py-3 shadow-md mb-5"
              role="alert`}
              >
                <div className="">
                  <div>
                    <p className="text-sm">{message}</p>
                  </div>
                </div>
              </div>
            )}

            <h1 className="font-bold text-3xl mt-[2rem] mb-5">
              Reset <span className="text-text-green">Password</span>
            </h1>
            <label htmlFor="password">Enter Password</label>
            <div className=" relative w-full">
              {show ? (
                <BiHide
                  onClick={handleShow}
                  className=" absolute text-xl right-[1rem] top-[2rem]"
                />
              ) : (
                <BiShow
                  onClick={handleShow}
                  className=" absolute text-xl right-[1rem] top-[2rem]"
                />
              )}
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green w-full"
              />
            </div>
            <div className="flex w-full">
              <button
                onClick={(e) => handleReset(e)}
                disabled={loading ? true : false}
                className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-2/6 mr-10`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  "Verify Code"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className=" w-full flex h-[100vh]">
        <AccountNav />

        <div className=" bg-bg-green w-2/4 ">
          <div className="w-[80%] mx-auto">
            <h1 className="font-bold text-3xl mt-[2rem] mb-5">
              Forgot <span className="text-text-green">Password</span>
            </h1>

            {error && message && (
              <div
                className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                role="alert"
              >
                <p>{message}</p>
              </div>
            )}

            {approved && message && (
              <div
                className={` bg-input-green border-t-4 border-grad-light rounded-b text-teal-900 px-4 py-3 shadow-md mb-5"
              role="alert`}
              >
                <div className="">
                  <div>
                    <p className="text-sm">{message}</p>
                  </div>
                </div>
              </div>
            )}

            <form action="" className="grid" onSubmit={handleForgot}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green ${
                  emailEmpty
                    ? "border-[2px] border-orange-700 bg-orange-100"
                    : ""
                }`}
              />

              <button
                disabled={loading ? true : false}
                className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold`}
              >
                {loading ? (
                  <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
                ) : (
                  "Send Code"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
