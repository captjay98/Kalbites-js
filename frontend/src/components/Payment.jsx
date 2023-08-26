import React from "react";
import { useNavigate } from "react-router-dom";
import InfoBar from "./InfoBar";
import axiosInstance from "../../axiosInstance";

const Payment = () => {
  const navigate = useNavigate();
  const description = "Make Your payment to confirm Order";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const pay = await axiosInstance.post("/items/order");
      console.log("Order Created", pay);
    } catch (error) {
      console.log(error);
    }
    navigate("/confirmation");
  };
  return (
    <div className="h-screen bg-myBlue text-yellow-500">
      <InfoBar description={description} />
      <div className="flex flex-col items-center justify-center ">
        <form onSubmit={handleSubmit} className="bg-myBlue rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <label htmlFor="nameOnCard" className="text-yellow-500">
              Name on Card:
            </label>
            <input
              type="text"
              id="nameOnCard"
              placeholder="JAMAL IBRAHIM UMAR"
              className="rounded-3xl border border-yellow-500 bg-myBlue px-3 py-2 w-full text-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="creditCardNumber" className="text-yellow-500">
              Credit Card Number:
            </label>
            <input
              type="number"
              id="creditCardNumber"
              placeholder="1111-2222-3333-4444"
              className="rounded-3xl border border-yellow-500 bg-myBlue px-3 py-2 w-full text-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expMonth" className="text-yellow-500">
              Exp Month:
            </label>
            <input
              type="text"
              id="expMonth"
              placeholder="January"
              className="rounded-3xl border border-yellow-500  bg-myBlue px-3 py-2 w-full text-yellow-500"
            />
          </div>
          <div className="flex">
            <div className="mr-2">
              <label htmlFor="expYear" className="text-yellow-500 bg-myBlue ">
                Exp Year:
              </label>
              <input
                type="number"
                id="expYear"
                placeholder="2022"
                className="rounded-3xl border border-yellow-500 px-3 py-2 w-full text-yellow-500 bg-myBlue "
              />
            </div>
            <div>
              <label htmlFor="cvv" className="text-yellow-500 bg-myBlue ">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="1234"
                className="rounded-3xl border border-yellow-500 bg-myBlue px-3 py-2 w-full text-yellow-500"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Proceed to Checkout"
            className="bg-yellow-500 text-myBlue py-2 px-4 mt-6 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Payment;
