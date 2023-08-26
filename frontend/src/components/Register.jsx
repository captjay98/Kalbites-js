import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InfoBar from "./InfoBar";
import axiosInstance from "../../axiosInstance";

const RegisterForm = () => {
  const [user, registerUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    password: "",
    rePassword: "",
    account_type: "customer",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    registerUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axiosInstance.post("/users/register", user);

      console.log("Registration successful!", response.data);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
      console.error("Registration failed:", error.message);
      console.log("Error Response", error.response.data);
    }
  };

  const description = "Register Here";
  return (
    <>
      <InfoBar description={description} />
      <div className="h-screen flex items-center justify-center">
        <div className="w-11/12 max-w-sm mt-3 mb-5 rounded-2xl px-5 py-5 bg-yellow-500">
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="block text-myBlue font-bold mb-1" htmlFor="firstname">
                First Name:
              </label>
              <input
                className="appearance-none  rounded-3xl w-full py-1 px-3 bg-myBlue text-yellow-300 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-myBlue font-bold mb-1" htmlFor="lastname">
                Last Name:
              </label>
              <input
                className="appearance-none  rounded-3xl  w-full py-1 px-3 bg-myBlue text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-myBlue  font-bold mb-1" htmlFor="phone">
                Phone:
              </label>
              <input
                className="appearance-none  rounded-3xl  w-full py-1 px-3 bg-myBlue text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-myBlue  font-bold mb12" htmlFor="address">
                Address:
              </label>
              <input
                className="appearance-none  rounded-3xl  w-full py-1 px-3 bg-myBlue text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-myBlue  font-bold mb-1" htmlFor="password">
                Password:
              </label>
              <input
                className="appearance-none  rounded-3xl  w-full py-1 px-3 bg-myBlue text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-myBlue font-bold mb-1" htmlFor="rePassword">
                Re-Password:
              </label>
              <input
                className="appearance-none rounded-3xl w-full py-1 px-3 bg-myBlue text-yellow-300 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="rePassword"
                value={user.rePassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-myBlue rounded-3xl hover:bg-blue-700 text-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
