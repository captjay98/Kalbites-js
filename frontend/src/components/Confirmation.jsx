import { useState, useEffect, useRef } from "react";
import InfoBar from "./InfoBar";
import axiosInstance from "../../axiosInstance";

const Confirmation = () => {
  const description = "Here is your Order Details";
  // const [showReceipt, setShowReceipt] = useState(false);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  // const receiptRef = useRef(null);

  const getData = async () => {
    try {
      const response = await axiosInstance.get("/items/order");
      console.log("DATA", response.data.order);

      setOrder(response.data.order);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setShowReceipt(true);

    getData();
  }, []);

  // useEffect(() => {
  //   // if (showReceipt) {
  //     // receiptRef.current.style.transform = "translateY(0)";
  //     // receiptRef.current.style.opacity = 1;
  //     console.log("'ORDER'", order);
  //   }
  // }, [showReceipt]);

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2 bg-myBlue h-screen w-screen flex justify-evenly transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin mt-24  rounded-full border-blue-400 border-8 h-16 w-16"></div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />

      <div className="border-4 border-yellow-500 rounded-full w-11/12 m-auto mt-5 h-5"></div>

      <div className="overflow-hidden pb-0">
        <div className="p-8 text-left w-72 m-auto bg-yellow-500 rounded-bl-3xl rounded-br-3xl shadow-lg">
          <div className=" flex flex-col py-3  ">
            <h3> Customer Name: </h3>
            <span className="text-sm font-medium text-gray-700">
              {order.buyer.firstName} {order.buyer.lastName}
            </span>
          </div>
          <div className=" flex flex-col py-3">
            <h3>Customer Phone:</h3>
            <span className="text-sm font-medium text-gray-700">{order.buyer.phone}</span>
          </div>
          <div className=" flex flex-col py-3 ">
            <h3>Customer Address: </h3>
            <span className="text-sm font-medium text-gray-700">{order.buyer.address}</span>
          </div>
          <div className=" flex flex-col py-3 ">
            <h3> items Purchased: </h3>
            <span className="text-sm font-medium text-gray-700">{order.item.name}</span>
          </div>
          <div className=" flex flex-col py-3 ">
            <h3>Amount Paid: </h3>
            <span className="text-sm font-medium text-gray-700">{order.item.price}</span>
          </div>
          <div className=" flex flex-col py-3 ">
            <h3>Order Date: </h3>
            <span className="text-sm font-medium text-gray-700">{order.createdAt}</span>
          </div>
          <div className=" flex flex-col py-3 ">
            <h3>Delivery Date: </h3>
            <span className="text-sm font-medium text-gray-700">{order.delivery}</span>
          </div>
        </div>
        )
      </div>
    </div>
  );
};

export default Confirmation;
