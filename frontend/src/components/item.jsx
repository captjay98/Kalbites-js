import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import axiosInstance from "../../axiosInstance";

const Item = () => {
  const { category, itemId } = useParams();
  const navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState([]);

  const handlePaymentClick = () => {
    navigate(`/${category}/${itemId}/payment`);
  };

  const fetchItemDetails = async () => {
    try {
      const response = await axiosInstance.get(`/items/${category.toLowerCase()}/${itemId}`);
      console.log("Item", response.data);
      setItemDetails(response.data.item);
    } catch (error) {
      console.log("Error Fetching Item Details:", error);
    }
  };

  useEffect(() => {
    fetchItemDetails();
    console.log(" Fetching Item...");
  }, [category, itemId]);

  return (
    <div className="h-screen">
      <InfoBar />
      {/* Chec if a user is logged in before navigating to the payment page */}
      <div className="m-auto mt-5 px-2 py-5 mb-5 pb-5  w-11/12 rounded-3xl">
        <div className="overflow-auto flex flex-wrap  mb-5 pb-5 ">
          <h3 className="text-center mt-5 mb-5 pt-2 pb-2 text-yellow-500 text-bold">{category}</h3>
          <div className="w-full pb-2 mb-2 p-1 h-64">
            <button onClick={handlePaymentClick} className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={itemDetails.image}
                  alt={itemDetails.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white">
                  Price: {itemDetails.price}
                </span>
                <span className="absolute bottom-2 px-3 py-3 right-2 text-white">
                  Quantity:{itemDetails.quantity}
                </span>
                <span className="absolute bottom-2 px-3 py-3 left-32 text-white">
                  {/* Size:{itemDetails.size} */}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

// import { Link, useNavigate, useParams } from "react-router-dom";
// import InfoBar from "./InfoBar";

// const Item = () => {
//   const { category, itemId } = useParams();
//   console.log(category, itemId);
//   let itemName = "";
//   let itemImagePath = "";
//   let itemPriceLabel = "";

//   // Item details based on the category
//   switch (category) {
//     case "brownies":
//       itemName = "Brownies";
//       itemImagePath = "/images/brownies.jpg";
//       itemPriceLabel = "5555";
//       break;
//     case "bentocakes":
//       itemName = "bento cake";
//       itemImagePath = "/images/bentocake.jpg";
//       itemPriceLabel = "7777";
//       break;
//     case "cupcakes":
//       itemName = "cupcake";
//       itemImagePath = "/images/cupcakes.jpg";
//       itemPriceLabel = "8888";
//       break;
//     case "muffins":
//       itemName = "muffin";
//       itemImagePath = "/images/muffins.jpg";
//       itemPriceLabel = "9999";
//       break;
//     case "swissrolls":
//       itemName = "swiss roll";
//       itemImagePath = "/images/swissrolls.jpg";
//       itemPriceLabel = "1111";
//       break;
//     default:
//       break;
//   }

//   const navigate = useNavigate(); // Hook for navigation

//   // Dummy ID
//   // const dummyId = "12345";

//   const handlePaymentClick = () => {
//     navigate(`/${category}/${itemId}/payment`); // Navigate to the payment page
//   };

//   return (
//     <div className="h-screen">
//       <InfoBar />
//       <div className="m-auto mt-5 px-2 py-5 mb-5 pb-5  w-11/12 rounded-3xl">
//         <div className="overflow-auto flex flex-wrap  mb-5 pb-5 ">
//           <h3 className="text-center mt-5 mb-5 pt-2 pb-2 text-yellow-500 text-bold">{category}</h3>
//           <div className="w-full pb-2 mb-2 p-1 h-64">
//             <button onClick={handlePaymentClick} className="block w-full h-full">
//               <div className="relative w-full h-full">
//                 <img
//                   src={itemImagePath}
//                   alt={itemName}
//                   className="w-full h-full object-cover rounded-3xl"
//                 />
//                 <span className="absolute bottom-2 px-3 py-3 left-2 text-white">
//                   Price: {itemPriceLabel}
//                 </span>
//                 <span className="absolute bottom-2 px-3 py-3 right-2 text-white">Quantity:</span>
//                 <span className="absolute bottom-2 px-3 py-3 left-32 text-white">Size:</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;
