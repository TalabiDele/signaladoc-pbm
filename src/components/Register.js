import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AccountNav from "./AccountNav";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Steps from "./Steps";
import btnLoader from "../imgs/loading.gif";
import VerifyUser from "./VerifyUser";
import Pharmacy from "./Pharmacy";
import { RiHeartAddFill } from "react-icons/ri";
import { BiHide, BiShow } from "react-icons/bi";
import Fees from "./Fees";

const Register = () => {
  const [code, setCode] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  // const [docs, setDocs] = useState({});

  const {
    validateEmail,
    error,
    setError,
    isEmail,
    isCode,
    setIsCode,
    isUserDetails,
    setIsUserDetails,
    loading,
    setLoading,
    emailCode,
    message,
    setMessage,
    userId,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    number,
    setNumber,
    register,
    user,
    approved,
    setApproved,
    userExists,
    codeResend,
    isPharmacy,
    isFee,
  } = useContext(AuthContext);

  const verifyEmail = (e) => {
    e.preventDefault();

    if (!loading) {
      validateEmail({ email });
    }
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
        setIsUserDetails(true);

        setApproved(false);
        setMessage("");
      }, 4000);
      setLoading(false);
    }

    setLoading(false);
  };

  const registerUser = (e) => {
    e.preventDefault();

    console.log(user);

    if (firstName === "") {
      setMessage("");
    }

    if (password !== confirmPassword) {
      setPassError(true);
      setMessage("Passwords do not match!");

      setTimeout(() => {
        setPassError(false);
      }, 4000);
    } else {
      register({ userId, firstName, lastName, number, password });
    }
  };

  const resendCode = (e) => {
    e.preventDefault();

    codeResend({ userId });
  };

  const handlePassShow = () => {
    setPassShow(!passShow);

    console.log(passShow);
  };

  const handleConfirmShow = () => {
    setConfirmShow(!confirmShow);

    console.log(confirmShow);
  };

  return (
    <div className={!isFee ? " w-full flex fixed" : ""}>
      {(!isFee || isPharmacy) && <AccountNav />}
      <div
        className={
          !isFee
            ? " bg-bg-green w-2/4 h-[100vh] overflow-y-scroll scrollbar-thumb-text-green scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-gray-100"
            : ""
        }
      >
        <div className="w-[80%] mx-auto">
          {!isFee && (
            <>
              <h1 className="font-bold text-3xl mt-[2rem] mb-5">
                Sign <span className="text-text-green">Up!</span>
              </h1>
              <p className="mb-5 font-medium">
                Already have an account?{" "}
                <Link to="/signin" className=" text-text-green">
                  Login
                </Link>{" "}
              </p>

              <button className="flex justify-center items-center bg-white shadow-lg px-5 py-3 rounded-xl w-full text-xl mb-10">
                <FcGoogle className="text-5xl mr-3" /> Sign up with Google
              </button>
              <div className="flex items-center justify-between mb-10">
                <div className="h-[1px] w-[300px] bg-text-green mr-4"> </div>{" "}
                <p className="text-xl uppercase"> or </p>{" "}
                <div className="h-[1px] w-[300px] bg-text-green ml-4"></div>
              </div>
            </>
          )}

          {!userExists ? (
            <>
              {!isFee && <Steps />}
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
                  className="bg-input-green border-t-4 border-grad-light rounded-b text-teal-900 px-4 py-3 shadow-md mb-5"
                  role="alert"
                >
                  <div className="">
                    <div>
                      <p className="text-sm">{message}</p>
                    </div>
                  </div>
                </div>
              )}

              {isEmail && !isFee && (
                <form action="" className="grid" onSubmit={verifyEmail}>
                  <div className="flex justify-between text-text-gray">
                    <label htmlFor="email">Enter Email for Verification</label>
                    <label htmlFor="email">Pharmacy Owner Information</label>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer rounded-lg bg-input-green mt-3 p-5 focus:outline-none focus:ring focus:ring-text-green"
                  />
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm mb-10">
                    Please provide a valid email address.
                  </p>
                  <button
                    disabled={loading ? true : false}
                    className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-[20rem]`}
                  >
                    {loading ? (
                      <img
                        src={btnLoader}
                        alt=""
                        className="w-[40px] mx-auto"
                      />
                    ) : (
                      "Continue"
                    )}
                  </button>
                </form>
              )}

              {isCode && (
                <div action="" className="grid">
                  <label className="text-text-gray" htmlFor="code">
                    Enter Verification Code
                  </label>
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
                      className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-[20rem] mr-10`}
                    >
                      {loading ? (
                        <img
                          src={btnLoader}
                          alt=""
                          className="w-[40px] mx-auto"
                        />
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
                        <img
                          src={btnLoader}
                          alt=""
                          className="w-[40px] mx-auto"
                        />
                      ) : (
                        "Resend Code"
                      )}
                    </button>
                  </div>
                </div>
              )}

              {isUserDetails && (
                <form
                  action=""
                  className={`grid ${isPharmacy && "hidden"}`}
                  onSubmit={registerUser}
                >
                  <label className="text-text-gray" htmlFor="lastname">
                    First Name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
                  />
                  <label className="text-text-gray" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
                  />
                  <label className="text-text-gray" htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
                  />

                  {passError && message && (
                    <div
                      className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                      role="alert"
                    >
                      <p>{message}</p>
                    </div>
                  )}

                  <label className="text-text-gray" htmlFor="password">
                    Password
                  </label>
                  <div className=" relative w-full">
                    {passShow ? (
                      <BiHide
                        onClick={handlePassShow}
                        className=" absolute text-xl right-[1rem] top-[2rem]"
                      />
                    ) : (
                      <BiShow
                        onClick={handlePassShow}
                        className=" absolute text-xl right-[1rem] top-[2rem]"
                      />
                    )}
                    <input
                      id="password"
                      name="password"
                      type={passShow ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-lg bg-input-green mt-3 mb-2 p-5 focus:outline-none focus:ring focus:ring-text-green w-full"
                    />
                  </div>
                  <p className="mt-2 text-grad-dark text-sm mb-10">
                    The password must be at least 6 characters and contain at
                    least one uppercase character, one number, and one special
                    character.
                  </p>
                  <label className="text-text-gray" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className=" relative w-full">
                    {confirmShow ? (
                      <BiHide
                        onClick={handleConfirmShow}
                        className=" absolute text-xl right-[1rem] top-[2rem]"
                      />
                    ) : (
                      <BiShow
                        onClick={handleConfirmShow}
                        className=" absolute text-xl right-[1rem] top-[2rem]"
                      />
                    )}
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={confirmShow ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="rounded-lg bg-input-green mt-3 mb-2 p-5 focus:outline-none focus:ring focus:ring-text-green w-full"
                    />
                  </div>
                  <p className="mt-2 text-grad-dark text-sm mb-10">
                    The password must be at least 6 characters and contain at
                    least one uppercase character, one number, and one special
                    character.
                  </p>

                  <div className=" text-xl mb-10">
                    <input
                      type="checkbox"
                      name="check"
                      id="check"
                      className="form-checkbox text-text-green bg-text-green focus:ring-blue-500 mr-3 "
                    />
                    <label className="text-text-gray" htmlFor="check">
                      I agree to platforms{" "}
                      <Link>
                        <span className="text-text-green cursor-pointer hover:underline">
                          Terms of Service
                        </span>
                      </Link>{" "}
                      and{" "}
                      <Link>
                        <span className="text-text-green cursor-pointer hover:underline">
                          Privacy Policy
                        </span>
                      </Link>
                      .
                    </label>
                  </div>

                  <button
                    disabled={loading ? true : false}
                    className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold w-[20rem]`}
                  >
                    {loading ? (
                      <img
                        src={btnLoader}
                        alt=""
                        className="w-[40px] mx-auto"
                      />
                    ) : (
                      <div className="flex items-center justify-center">
                        <RiHeartAddFill className="text-3xl mr-[1rem]" /> Create
                        Account
                      </div>
                    )}
                  </button>
                </form>
              )}

              {/* {isPharmacy && <Pharmacy />} */}
            </>
          ) : (
            <>
              <VerifyUser />
            </>
          )}

          {isFee && <Fees />}

          {isPharmacy && <Pharmacy />}
        </div>
      </div>
    </div>
  );
};

export default Register;

/* <label className="text-text-gray" htmlFor="upload">
                <div className=" flex justify-between mb-3">
                  <p>Attach Documents</p>
                  <p>PDF and docx only</p>
                </div>
                <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                  <AiOutlineCloudUpload className=" text-7xl text-center" />
                  <p>
                    Drag and drop here <br /> Or <br />{" "}
                    <span className="text-text-green cursor-pointer hover:underline">
                      Browse files
                    </span>
                  </p>
                </div>
              </label>
              <input type="file" name="upload" id="upload" className="hidden" /> */
