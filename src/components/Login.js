import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import AccountNav from "./AccountNav";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import btnLoader from "../imgs/loading.gif";
import { BiHide, BiShow } from "react-icons/bi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [show, setShow] = useState("");
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const { login, message, loading, error, approved, setMessage, setError } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "") {
      setMessage("Email field is required!");
      setError(true);
      setEmailEmpty(true);
      setPasswordEmpty(false);
      console.log(email);

      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 10000);
    }

    if (password === "") {
      setMessage("Password field is required!");
      setError(true);
      setEmailEmpty(false);
      setPasswordEmpty(true);

      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 10000);
    }

    if (email === "" && password === "") {
      setMessage("Email & Password fields required!");
      setError(true);
      setEmailEmpty(true);

      setTimeout(() => {
        setMessage("");
        setError(false);
      }, 10000);
    }

    setTimeout(() => {
      setMessage("");
      setError(false);
    }, 10000);

    if (email && password) {
      setPasswordEmpty(false);
      setEmailEmpty(false);
      login({ email, password });
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className=" w-full flex h-[100vh]">
      <AccountNav />
      <div className=" bg-bg-green w-2/4 ">
        <div className="w-[80%] mx-auto">
          <h1 className="font-bold text-3xl mt-[2rem] mb-5 ">
            Log <span className="text-text-green">In!</span>
          </h1>
          <p className="mb-5 font-medium">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-text-green">
              Sign Up
            </Link>{" "}
          </p>

          <button className="flex justify-center items-center bg-white shadow-lg px-5 py-3 rounded-xl w-full text-xl mb-10">
            <FcGoogle className="text-5xl mr-3" /> Login with Google
          </button>
          <div className="flex items-center justify-between mb-10">
            <div className="h-[1px] w-[300px] bg-text-green mr-4"> </div>{" "}
            <p className="text-xl uppercase"> or </p>{" "}
            <div className="h-[1px] w-[300px] bg-text-green ml-4"></div>
          </div>

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

          <form action="" className="grid" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green ${
                emailEmpty ? "border-[2px] border-orange-700 bg-orange-100" : ""
              }`}
            />
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
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-lg bg-input-green mt-3 mb-3 p-5 focus:outline-none focus:ring focus:ring-text-green w-full ${
                  passwordEmpty
                    ? "border-[2px] border-orange-700 bg-orange-100"
                    : ""
                }`}
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
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
