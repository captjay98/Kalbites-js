import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InfoBar from "./InfoBar";

const Item = ({ category, itemId }) => {
  let itemName = "";
  let itemImagePath = "";
  let itemPriceLabel = "";

  // Item details based on the category
  switch (category) {
    case "Brownies":
      itemName = "Brownie";
      itemImagePath = "/images/brownies.jpg";
      itemPriceLabel = "Brownie Price";
      break;
    case "BentoCakes":
      itemName = "Bento Cake";
      itemImagePath = "/images/bentocake.jpg";
      itemPriceLabel = "Bento Cake Price";
      break;
    case "CupCakes":
      itemName = "Cupcake";
      itemImagePath = "/images/cupcakes.jpg";
      itemPriceLabel = "Cupcake Price";
      break;
    case "Muffins":
      itemName = "Muffin";
      itemImagePath = "/images/muffins.jpg";
      itemPriceLabel = "Muffin Price";
      break;
    case "SwissRolls":
      itemName = "Swiss Roll";
      itemImagePath = "/images/swissrolls.jpg";
      itemPriceLabel = "Swiss Roll Price";
      break;
    default:
      break;
  }

  const navigate = useNavigate(); // Hook for navigation

  // Dummy ID
  const dummyId = "12345";

  const handlePaymentClick = () => {
    navigate(`/${category}/${itemId}/payment`); // Navigate to the payment page
  };

  return (
    <div className="h-screen">
      <InfoBar />
      <div className="m-auto mt-5 px-2 py-5 mb-5 pb-5  w-11/12 rounded-3xl">
        <div className="overflow-auto flex flex-wrap  mb-5 pb-5 ">
          <h3 className="text-center mt-5 mb-5 pt-2 pb-2 text-yellow-500 text-bold">{category}</h3>
          <div className="w-full pb-2 mb-2 p-1 h-64">
            <button onClick={handlePaymentClick} className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={itemImagePath}
                  alt={itemName}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white">
                  Price: {itemPriceLabel}
                </span>
                <span className="absolute bottom-2 px-3 py-3 right-2 text-white">Quantity:</span>
                <span className="absolute bottom-2 px-3 py-3 left-32 text-white">Size:</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
