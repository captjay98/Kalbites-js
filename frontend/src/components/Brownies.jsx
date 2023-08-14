import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
});

const Brownies = () => {
  const description = "Check out our fluffy Brownies";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get("/items/brownies/");
        console.log("Fetched data:", response.data.item);
        setData(response.data.item);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.log("Error Fetching Data:", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };
    console.log("Fetching data...");
    getData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />
      <div className="m-auto mt-5 mb-5 px-2 py-5 pb-5 w-11/12 rounded-3xl">
        {loading ? ( // Render a loading state while data is being fetched
          <p>Loading...</p>
        ) : data.length > 0 ? ( // Render the data if available
          data.map((brownie) => (
            <div className="w-full pb-2 mb-3 p-1 h-64" key={brownie._id}>
              <Link to={`/Brownies/${brownie._id}`}>
                <div className="relative w-full h-full">
                  <img
                    src={brownie.image}
                    alt="Brownie"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <span className="absolute bottom-2 px-3 py-3 left-2 text-white">
                    {brownie.name}=-=-={brownie.price}=-=-={brownie.quantity}
                  </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No brownies found.</p>
        )}
      </div>
    </div>
  );
};

export default Brownies;

// // import { useState } from "react";
// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import InfoBar from "./InfoBar";
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3333",
// });

// const Brownies = () => {
//   const description = "Check out our fluffy Brownies";
//   const brownies = [
//     {
//       id: "1",
//       Image: "/images/muffins.jpg",
//       Name: "3 Pieces of Brownies",
//     },
//     {
//       id: "2",
//       Image: "/images/muffins.jpg",
//       Name: "5 Pieces of Brownies",
//     },
//     {
//       id: "3",
//       Image: "/images/muffins.jpg",
//       Name: "7 Pieces of Brownies",
//     },
//     {
//       id: "4",
//       Image: "/images/muffins.jpg",
//       Name: "10 Pieces of Brownies",
//     },
//   ];

//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await axiosInstance.get("/items/brownies/");
//       setData(response.data);
//       console.log(data);
//     } catch (error) {
//       console.log("Error Fetching Data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="h-screen overflow-auto">
//       <InfoBar description={description} />
//       <div className="m-auto mt-5 mb-5 px-2 py-5 pb-5 w-11/12 rounded-3xl">
//         {data.map((brownie) => (
//           <div className="w-full pb-2 mb-3 p-1 h-64" key={brownie.id}>
//             <Link to={`/Brownies/${brownie.id}`}>
//               <div className="relative w-full h-full">
//                 <img
//                   src={brownie.Image}
//                   alt="Brownie"
//                   className="w-full h-full object-cover rounded-3xl"
//                 />
//                 <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">
//                   {brownie.Name}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brownies;

// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import InfoBar from "./InfoBar";
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3333/",
// });

// const Brownies = () => {
//   const description = "Check out our fluffy Brownies";

//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await axiosInstance.get("items/brownies");
//       console.log(response.data);
//       setData(response.data);
//     } catch (error) {
//       console.log("Error Fetching Data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     console.log(data); // This will log the updated state whenever 'data' changes.
//   }, [data]);

//   return (
//     <div className="h-screen overflow-auto">
//       <InfoBar description={description} />
//       <div className="m-auto mt-5 mb-5 px-2 py-5 pb-5 w-11/12 rounded-3xl">
//         {data.map((brownie) => (
//           <div className="w-full pb-2 mb-3 p-1 h-64" key={brownie.id}>
//             <Link to={`/Brownies/${brownie.id}`}>
//               <div className="relative w-full h-full">
//                 <img
//                   src={brownie.image}
//                   alt="Brownie"
//                   className="w-full h-full object-cover rounded-3xl"
//                 />
//                 <span className="absolute bottom-2 px-3 py-3 left-2 text-white">
//                   {brownie.name}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brownies;
