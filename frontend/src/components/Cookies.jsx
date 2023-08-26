import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import axiosInstance from "../../axiosInstance";

const Cookies = () => {
  const description = "Check out our Amazing Bentos";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await axiosInstance.get("/items/cookies/");
      console.log("Fetched data:", response.data.item);
      setData(response.data.item);
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching Data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching data...");
    getData();
  }, []);

  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />
      <div className="m-auto mt-5 mb-5 px-2 py-5 pb-5 w-11/12 rounded-3xl">
        {loading ? (
          <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin mt-24 rounded-full border-blue-400 border-8 h-16 w-16"></div>
          </div>
        ) : data.length > 0 ? (
          data.map((item) => (
            <div className="w-full pb-2 mb-3 p-1 h-64" key={item._id}>
              <Link to={`/Brownies/${item._id}`}>
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt="Brownie"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <span className="absolute bottom-2 px-3 py-3 left-2 text-white">
                    {item.name}=-=-={item.price}=-=-={item.quantity}
                  </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-yellow-300 text-center py-16 px-16">No Cookies found.</p>
        )}
      </div>
    </div>
  );
};
export default Cookies;
