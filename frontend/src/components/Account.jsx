import InfoBar from "./InfoBar";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

const Account = () => {
  const description = "Profile";
  const navigate = useNavigate();
  const [user, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserDetails = async () => {
    try {
      const response = await axiosInstance.get("/users/account");
      setUserDetails(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Getting User Details", user);
    getUserDetails();
  }, []);

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2 bg-myBlue h-screen w-screen flex justify-evenly transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin mt-24  rounded-full border-blue-400 border-8 h-16 w-16"></div>
      </div>
    );
  }

  return (
    <div className="h-screen myBlue">
      <InfoBar description={description} />
      <div className="container mx-auto py-10">
        {!user ? (
          navigate("/login")
        ) : (
          <div className="max-w-md mx-auto bg-yellow-500 w-11/12  rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-myBlue mb-4">Customer Details</h2>
            <div className="mb-4">
              <p className="text-gray-800">Name: {user.firstName}</p>
              <p className="text-gray-800">Phone: {user.phone}</p>
              <p className="text-gray-800">Address: {user.address}</p>
            </div>
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">Previous Orders</h3> */}
            {/* {user.previousOrders.length > 0 ? ( */}
            {/*   <ul className="space-y-2"> */}
            {/*     {user.previousOrders.map((order) => ( */}
            {/*       <li key={order.id} className="text-gray-800"> */}
            {/*         {order.product} - {order.price} */}
            {/*       </li> */}
            {/*     ))} */}
            {/*   </ul> */}
            {/* ) : ( */}
            {/*   <p className="text-gray-800">No previous orders</p> */}
            {/* )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
