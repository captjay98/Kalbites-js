// import { useState } from "react";
import { Link } from "react-router-dom";
import InfoBar from "./InfoBar";
const Brownies = () => {
  const description = "Check out our fluffy Brownies";
  const brownies = [
    {
      id: "1",
      Image: "/images/muffins.jpg",
      Name: "3 Pieces of Brownies",
    },
    {
      id: "2",
      Image: "/images/muffins.jpg",
      Name: "5 Pieces of Brownies",
    },
    {
      id: "3",
      Image: "/images/muffins.jpg",
      Name: "7 Pieces of Brownies",
    },
    {
      id: "4",
      Image: "/images/muffins.jpg",
      Name: "10 Pieces of Brownies",
    },
  ];

  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />
      <div className="m-auto mt-5 mb-5 px-2 py-5 pb-5 w-11/12 rounded-3xl">
        {brownies.map((brownie) => (
          <div className="w-full pb-2 mb-3 p-1 h-64" key={brownie.id}>
            <Link to={`/Brownies/${brownie.id}`}>
              <div className="relative w-full h-full">
                <img
                  src={brownie.Image}
                  alt="Brownie"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">
                  {brownie.Name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brownies;
