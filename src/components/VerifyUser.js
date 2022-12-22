import React, { useContext, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import btnLoader from "../imgs/loading.gif";

const VerifyUser = () => {
  //   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const {
    validateUser,
    loading,
    userExists,
    message,
    email,
    setEmail,
    isPharmacy,
  } = useContext(AuthContext);

  const verifyUser = (e) => {
    e.preventDefault();

    validateUser({ email, password });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className={`${isPharmacy && "hidden"}`}>
        {userExists && message && (
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
        <form action="" className="grid" onSubmit={verifyUser}>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(email)}
            className="peer rounded-lg bg-input-green mt-3 p-5 focus:outline-none focus:ring focus:ring-text-green"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm mb-3">
            Please provide a valid email address.
          </p>

          <label htmlFor="password">Password</label>
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
              className="peer rounded-lg bg-input-green mt-3 p-5 focus:outline-none focus:ring focus:ring-text-green mb-2 w-full"
            />
          </div>
          <Link
            to="/forgot-password"
            className=" text-right mb-10 font-bold text-lg text-text-green"
          >
            Forgot Password?
          </Link>

          <button
            disabled={loading ? true : false}
            className={` bg-gradient-to-r from-grad-light to-grad-dark text-white py-5 rounded-xl text-xl active:ring focus:ring reen mt-3 mb-10 p-5 focus:outline-none focus:ring-text-green hover:from-grad-dark hover:to-grad-dark transition-500 transition-all font-bold`}
          >
            {loading ? (
              <img src={btnLoader} alt="" className="w-[40px] mx-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyUser;
