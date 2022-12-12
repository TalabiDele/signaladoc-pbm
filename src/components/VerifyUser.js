import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import btnLoader from "../imgs/loading.gif";

const VerifyUser = () => {
  //   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer rounded-lg bg-input-green mt-3 p-5 focus:outline-none focus:ring focus:ring-text-green mb-10"
          />
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
