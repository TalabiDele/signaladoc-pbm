import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import btnLoader from "../imgs/loading.gif";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import AccountNav from "./AccountNav";
import Steps from "./Steps";

const Pharmacy = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [license, setLicense] = useState();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState("");
  const [isState, setIsState] = useState();
  const [state, setState] = useState("");
  const [officialNumbers, setOfficialNumbers] = useState(1);
  const [officialEmails, setOfficialEmails] = useState(1);
  const [city, setCity] = useState("");
  const [incor, setIncor] = useState();
  const [insurance, setInsurance] = useState();
  const [pharmaLicense, setPharmaLicense] = useState();
  const [incorDoc, setIncorDoc] = useState();
  const [isIncor, setIsIncor] = useState(false);
  const [isInsure, setIsInsure] = useState(false);
  const [insureDoc, setInsureDoc] = useState();
  const [isLicense, setIsLicense] = useState(false);
  const [licenseDoc, setLicenseDoc] = useState();
  const [number, setNumber] = useState();
  const [incorError, setIncorError] = useState(false);
  const [insureError, setInsureError] = useState(false);
  const [licenseError, setLicenseError] = useState(false);

  const {
    loading,
    user,
    addPharmacy,
    error,
    message,
    approved,
    setError,
    setMessage,
    userId,
  } = useContext(AuthContext);

  useEffect(() => {
    getCountries();
    getStates(countrySelected);
  }, []);

  const getCountries = async () => {
    const res = await axios.get(
      `https://countriesnow.space/api/v0.1/countries`
    );

    const countryList = await res.data;

    setCountries(countryList.data);
  };

  const getStates = async (e) => {
    setCountry(e.target.value);
    setCountrySelected(e.target.value);

    const res = await axios.get(
      `https://countriesnow.space/api/v0.1/countries`
    );
    const countryList = res.data;

    // eslint-disable-next-line array-callback-return
    countryList.data.map((c) => {
      if (c.iso2 === e.target.value) {
        setIsState(c.cities);
      }
    });
  };

  const handleIncorChange = (e) => {
    setIncor(e.target.files[0]);

    setIsIncor(true);
  };

  const handlePharmacy = (e) => {
    e.preventDefault();

    const incorSize = incor.size / 1024;
    const insureSize = insurance.size / 1024;
    const licenseSize = pharmaLicense.size / 1024;

    let formData = new FormData();
    formData.append("company_incorporation", incor);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("license_number", license);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("has_official_email", officialEmails);
    formData.append("has_official_phone_numbers", officialNumbers);
    formData.append("indemnity_insurance", insurance);
    formData.append("pharmacy_license", pharmaLicense);
    formData.append("phone_number", number);
    formData.append("city", city);
    formData.append("user", userId);

    if (incorSize > 2000) {
      setIncorError(true);
      setMessage("File should not be more than 2mb");

      setTimeout(() => {
        setIncorError(false);
      }, 5000);
    } else if (insureSize > 2000) {
      setInsureError(true);
      setMessage("File should not be more than 2mb");

      setTimeout(() => {
        setInsureError(false);
      }, 5000);
    } else if (licenseSize > 2000) {
      setLicenseError(true);
      setMessage("File should not be more than 2mb");

      setTimeout(() => {
        setLicenseError(false);
      }, 5000);
    } else {
      addPharmacy({
        formData,
      });
    }
  };

  const handleInsureChange = (e) => {
    setInsurance(e.target.files[0]);

    console.log(insureDoc);

    setIsInsure(true);
  };

  const handleLicenseChange = (e) => {
    setPharmaLicense(e.target.files[0]);

    console.log(pharmaLicense);

    setIsLicense(true);
  };

  const handleEmail = (e) => {
    console.log(e.target.value);
    setOfficialEmails(e.target.value);
  };

  const handleNumber = (e) => {
    console.log(e.target.value);
    setOfficialNumbers(e.target.value);
  };

  return (
    <div className=" w-2/4 fixed top-0 right-0 bg-bg-green pt-[4rem] h-[100vh] overflow-y-scroll scrollbar-thumb-text-green scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-gray-100">
      {/* <AccountNav /> */}
      <Steps />
      <div className="bg-bg-green w-full  ">
        <div className="w-[80%] mx-auto">
          <div className="">
            <h1 className=" text-3xl mt-[2rem] mb-5">
              Create Pharmacy Account
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

            <form action="" className="grid" onSubmit={handlePharmacy}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                placeholder="Example Pharmacy"
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="examplepharmacy@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234**********"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
              />

              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="No 1, Brown Street, Off Yellow Road."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
              />

              <label htmlFor="countries">Country of Residence</label>
              {countries && (
                <>
                  <select
                    name="countries"
                    id="countries"
                    onChange={(e) => getStates(e)}
                    className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green scrollbar-thumb-text-green scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-gray-100"
                  >
                    {countries.map((c) => (
                      <option
                        value={c.iso2}
                        onClick={(e) => setCountry(e.target.value)}
                        key={c.iso2}
                      >
                        {c.iso2}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    id="state"
                    onChange={(e) => setState(e.target.value)}
                    className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
                  >
                    {isState &&
                      isState.map((city) => (
                        <option value={city}>{city}</option>
                      ))}
                  </select>
                </>
              )}

              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={city}
                placeholder="Ikeja"
                onChange={(e) => setCity(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
              />

              <label htmlFor="license">License Number</label>
              <input
                id="license"
                name="license"
                type="number"
                value={license}
                placeholder="1234567890"
                onChange={(e) => setLicense(e.target.value)}
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green"
              />

              <label htmlFor="hasEmail">Do you have an official Email?</label>
              <select
                id="hasEmail"
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green scrollbar-thumb-text-green scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-gray-100"
                onChange={(e) => handleEmail(e)}
                value={officialEmails}
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>

              <label htmlFor="hasNumber">
                Do you have an official phone number?
              </label>
              <select
                id="hasNumber"
                className="rounded-lg bg-input-green mt-3 mb-10 p-5 focus:outline-none focus:ring focus:ring-text-green scrollbar-thumb-text-green scrollbar-thumb-rounded-lg scrollbar-thin scrollbar-track-gray-100"
                onChange={(e) => handleNumber(e)}
                value={officialNumbers}
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>

              <label htmlFor="incor">
                <div className=" flex justify-between mb-3">
                  <p>Company Incorporation</p>
                  <p>PDF only</p>
                </div>

                {incorError && (
                  <div
                    className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                    role="alert"
                  >
                    <p>{message}</p>
                  </div>
                )}

                {isIncor ? (
                  <>
                    <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                      <p className="grid font-bold">
                        {incor && incor.name}
                        <span className="text-text-green font-normal cursor-pointer hover:underline">
                          Change file
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                      <AiOutlineCloudUpload className=" text-7xl text-center" />
                      <p>
                        Drag and drop here <br /> Or <br />{" "}
                        <span className="text-text-green cursor-pointer hover:underline">
                          Browse files
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </label>
              <input
                type="file"
                name="incor"
                id="incor"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleIncorChange(e)}
              />

              <label htmlFor="insurance">
                <div className=" flex justify-between mb-3">
                  <p>Indemnity Insurance</p>
                  <p>PDF only</p>
                </div>

                {insureError && (
                  <div
                    className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                    role="alert"
                  >
                    <p>{message}</p>
                  </div>
                )}
                {isInsure ? (
                  <>
                    <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                      <p className="grid font-bold">
                        {insurance && insurance.name}
                        <span className="text-text-green font-normal cursor-pointer hover:underline">
                          Change file
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                      <AiOutlineCloudUpload className=" text-7xl text-center" />
                      <p>
                        Drag and drop here <br /> Or <br />{" "}
                        <span className="text-text-green cursor-pointer hover:underline">
                          Browse files
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </label>
              <input
                type="file"
                name="insurance"
                id="insurance"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleInsureChange(e)}
              />

              <label htmlFor="pharmaLicense">
                <div className=" flex justify-between mb-3">
                  <p>Pharmacy License</p>
                  <p>PDF only</p>
                </div>

                {licenseError && (
                  <div
                    className="mb-5 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                    role="alert"
                  >
                    <p>{message}</p>
                  </div>
                )}

                {isLicense ? (
                  <>
                    <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                      <p className="grid font-bold">
                        {pharmaLicense && pharmaLicense.name}
                        <span className="text-text-green font-normal cursor-pointer hover:underline">
                          Change file
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-center bg-input-green rounded-lg focus:outline-none focus:ring focus:ring-text-green grid justify-items-center py-5 mb-10">
                      <AiOutlineCloudUpload className=" text-7xl text-center" />
                      <p>
                        Drag and drop here <br /> Or <br />{" "}
                        <span className="text-text-green cursor-pointer hover:underline">
                          Browse files
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </label>
              <input
                type="file"
                name="phamarLicense"
                id="pharmaLicense"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleLicenseChange(e)}
              />

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
      </div>
    </div>
  );
};

export default Pharmacy;
