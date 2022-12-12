import { createContext, useState, useEffect } from "react";
import { API_URL } from "../Config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [approved, setApproved] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState(null);
  const [emailCode, setEmailCode] = useState(null);
  const [isEmail, setIsEmail] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isUserDetails, setIsUserDetails] = useState(false);
  const [isPharmacy, setIsPharmacy] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [firstError, setFirstError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [isReset, setIsReset] = useState(false);
  // const []

  useEffect(() => {}, []);

  const validateEmail = async (email) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const data = await res.json();

    if (res.ok) {
      if (data.exists) {
        setApproved(true);
        setUserExists(true);

        setMessage(`${data.message}, enter your password`);

        setIsEmail(true);
        setIsCode(false);

        setTimeout(() => {
          setMessage("");
        }, 6000);
      } else {
        setApproved(true);
        setMessage(`${data.message}`);
        setUserExists(false);
        setTimeout(() => {
          setApproved(false);
          setMessage("");
        }, 6000);

        setEmailCode(data.code);

        console.log(data);

        setUserId(data.registration_id);

        console.log(userId);

        setIsEmail(false);
        setIsCode(true);
      }
    } else {
      setError(true);

      setMessage(data.email[0]);

      console.log(message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    setTimeout(() => {
      setError(false);
    }, 3000);

    setLoading(false);
  };

  const register = async ({
    userId,
    firstName,
    lastName,
    email,
    number,
    name,
    password,
  }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/register/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registration_id: userId,
        first_name: firstName,
        surname: lastName,
        phone_number: number,
        password,
      }),
    });

    console.log(res);

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setApproved(true);
      setIsPharmacy(true);
      setMessage("Account created successfully!");
      setTimeout(() => {
        setApproved(false);
        setMessage("");
      }, 4000);
    } else {
      if (data.first_name && data.surname && data.password) {
        setMessage(`All fields are required!`);
      } else if (data.first_name && data.surname) {
        setMessage("The first name & surname fields are required!");
      } else if (data.first_name && data.password) {
        setMessage("The first name & password fields are required!");
      } else if (data.surname && data.password) {
        setMessage("The surname & password fields are required!");
      } else if (data.surname) {
        setMessage(`${data.surname[0]}`);
      } else if (data.password) {
        setMessage(`${data.password[0]}`);
      } else if (data.first_name) {
        setMessage(`${data.surname[0]}`);
      }

      setError(true);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    console.log(data);

    setLoading(false);
  };

  const forgotPassword = async ({ email }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(true);
      setMessage(data.error);

      setTimeout(() => {
        setError(false);
        setLoading(false);
      }, 4000);
    } else {
      setApproved(true);
      setMessage(data.message);
      setEmailCode(data.code);
      setUserId(data.user_id);

      setTimeout(() => {
        setApproved(false);
        setLoading(false);

        setIsCode(true);
      }, 4000);
    }

    setTimeout(() => {
      setLoading(false);
    }, 4000);

    console.log(data);
  };

  const validateUser = async ({ email, password }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/register/user/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.valid) {
      setUser(data.user);
      setApproved(true);
      setMessage(data.message);
      setIsPharmacy(true);
      setIsCode(false);
      setIsEmail(false);
      setIsUserDetails(false);
      console.log(isPharmacy);
      console.log(user);

      setTimeout(() => {
        setMessage("");
        setApproved(false);
      }, 4000);
    } else {
      setError(true);
      setMessage(data.message);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    console.log(data);

    setLoading(false);
  };

  const forgotResend = async ({ id }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/forgot/resend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setApproved(true);
    const data = await res.json();

    setMessage(data.message);

    console.log(data);
    console.log(data.message);

    setTimeout(() => {
      setMessage("");
      setApproved(false);
    }, 10000);

    setLoading(false);
  };

  const codeResend = async ({ userId }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/register/resend-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ registration_id: userId }),
    });

    setApproved(true);
    const data = await res.json();

    setMessage(data.message);

    console.log(data);
    console.log(data.message);

    setTimeout(() => {
      setMessage("");
      setApproved(false);
    }, 10000);

    setLoading(false);
  };

  const resetPassword = async ({ password, userId, history }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/forgot/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userId, password }),
    });

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setApproved(true);
      setMessage("Password reset successful. You can now login!");

      setTimeout(() => {
        setMessage("");
        setApproved(false);

        setIsReset(false);

        history("/signin");
      }, 5000);
    } else {
      setError(true);
      setMessage(data.password[0]);

      setTimeout(() => {
        setError(false);
      }, 7000);
    }

    setLoading(false);
  };

  const login = async ({ email, password }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setApproved(true);
      setMessage(data.message);
      setUser(data.user);

      setTimeout(() => {
        setMessage("");
        setApproved(false);
      }, 4000);
    } else {
      setError(true);
      setMessage(data.message);

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 4000);
    }

    console.log(data);

    setLoading(false);
  };

  const addPharmacy = async ({ formData }) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/auth/register/create`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log(res);

    if (res.status === 413) {
      setError(true);
      setMessage("File(s) too large!");

      setTimeout(() => {
        setError(false);
        setLoading(false);
      }, 4000);
    }

    if (res.status === 422) {
      setError(true);
      setMessage("All fields are required!");

      setTimeout(() => {
        setError(false);
        setLoading(false);
      }, 4000);
    }

    if (data.status === "success") {
      setApproved(true);
      setMessage(data.message);

      setTimeout(() => {
        setApproved(false);
      }, 4000);
    }

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        validateEmail,
        error,
        setError,
        isEmail,
        setIsEmail,
        isCode,
        setIsCode,
        userExists,
        setUserExists,
        isUserDetails,
        setIsUserDetails,
        loading,
        setLoading,
        emailCode,
        message,
        setMessage,
        userId,
        setUserId,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        number,
        setNumber,
        register,
        setUser,
        approved,
        setApproved,
        validateUser,
        codeResend,
        login,
        addPharmacy,
        isPharmacy,
        setIsPharmacy,
        forgotPassword,
        forgotResend,
        isReset,
        setIsReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
