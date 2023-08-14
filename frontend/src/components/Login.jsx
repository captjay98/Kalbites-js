import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InfoBar from "./InfoBar";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
});

const LoginForm = () => {
  const [user, LoginUser] = useState({
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    LoginUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(user);

    if (!user.phone || !user.password) {
      setError("Please Enter both phone and password");
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post("/users/login", user);
      console.log("Authorization", response.data.token);
      localStorage.setItem("Token", response.data.token);
      navigate("/account");
    } catch (error) {
      if (error.response && error.response.status === 422) {
      } else {
        setError("An error occurred. Please try again later.");
      }
      console.error("Login failed:", error.message);
      console.log("Error Response", error.response.data);
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  const description = "Login Here";
  return (
    <>
      <InfoBar description={description} />
      <div className="h-screen flex items-center justify-center">
        <div className="w-11/12 max-w-sm mt-3 mb-5 rounded-2xl px-5 py-5 bg-yellow-500">
          <form onSubmit={handleSubmit}>
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
              <label className="block text-myBlue  font-bold mb-1" htmlFor="password">
                Password:
              </label>
              <input
                className="appearance-none  rounded-3xl  w-full py-1 px-3 bg-myBlue text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-myBlue rounded-3xl hover:bg-blue-700 text-yellow-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
