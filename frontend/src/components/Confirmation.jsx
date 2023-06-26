import { useState, useEffect, useRef } from "react";
import InfoBar from "./InfoBar";

const Confirmation = () => {
  const description = "Here is your Order Details";
  const [showReceipt, setShowReceipt] = useState(false);
  const receiptRef = useRef(null);

  useEffect(() => {
    setShowReceipt(true);
  }, []);

  useEffect(() => {
    if (showReceipt) {
      receiptRef.current.style.transform = "translateY(0)";
      receiptRef.current.style.opacity = 1;
    }
  }, [showReceipt]);

  const receiptData = {
    customerName: "John Doe",
    customerPhone: "123-456-7890",
    customerAddress: "123 Main St, City",
    itemsPurchased: "Item 1, Item 2, Item 3",
    amountPaid: "$100",
    orderDate: "June 2, 2023",
  };

  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />

      <div className="border-4 border-yellow-500 rounded-full w-11/12 m-auto mt-5 h-5"></div>

      <div className="overflow-hidden pb-0">
        {showReceipt && (
          <div
            ref={receiptRef}
            className="translate-y-[-510px] opacity-0"
            style={{
              transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
            }}
          >
            <div className="p-8 text-left w-72 m-auto bg-yellow-500 rounded-bl-3xl rounded-br-3xl shadow-lg">
              <div className=" flex flex-col py-3  ">
                <h3> Customer Name: </h3>
                <span className="text-sm font-medium text-gray-700">
                  {receiptData.customerName}
                </span>
              </div>
              <div className=" flex flex-col py-3">
                <h3>Customer Phone:</h3>
                <span className="text-sm font-medium text-gray-700">
                  {receiptData.customerPhone}
                </span>
              </div>
              <div className=" flex flex-col py-3 ">
                <h3>Customer Address: </h3>
                <span className="text-sm font-medium text-gray-700">
                  {receiptData.customerAddress}
                </span>
              </div>
              <div className=" flex flex-col py-3 ">
                <h3> items Purchased: </h3>
                <span className="text-sm font-medium text-gray-700">
                  {receiptData.itemsPurchased}
                </span>
              </div>
              <div className=" flex flex-col py-3 ">
                <h3>Amount Paid: </h3>
                <span className="text-sm font-medium text-gray-700">{receiptData.amountPaid}</span>
              </div>
              <div className=" flex flex-col py-3 ">
                <h3>Order Date: </h3>
                <span className="text-sm font-medium text-gray-700">{receiptData.orderDate}</span>
              </div>
              <div className=" flex flex-col py-3 ">
                <h3>Delivery Date: </h3>
                <span className="text-sm font-medium text-gray-700">{receiptData.orderDate}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
