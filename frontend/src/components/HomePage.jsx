import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import InfoBar from "./InfoBar";
import Brownies from "./Brownies";
import BentoCakes from "./BentoCakes";
import CupCakes from "./CupCakes";
import Muffins from "./Muffins";
import SwissRolls from "./SwissRolls";

const HomePage = () => {
  const description = "What would you like to buy today?";
  return (
    <div>
      <InfoBar description={description} />
      <div className="m-auto mt-5 px-2 py-5 mb-5 pb-5  w-11/12 rounded-3xl">
        <div className="overflow-auto flex flex-wrap  mb-5 pb-5 ">
          <div className="w-full pb-2 mb-2 p-1 h-64">
            <Link to="./brownies" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/muffins.jpg"
                  alt="Muffins"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">Brownies</span>
              </div>
            </Link>
          </div>

          <div className="w-full pb-2 mb-2 p-1 h-64">
            <Link to="./bentocakes" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="images/bentocake.jpg"
                  alt="Muffins"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">BentoCakes</span>
              </div>
            </Link>
          </div>

          <div className="w-full pb-2 mb-2 p-1 h-64">
            <Link to="./Cupcakes" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/cupcakes.jpg"
                  alt="Muffins"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">Cupcakes</span>
              </div>
            </Link>
          </div>

          <div className="w-full pb-2 mb-2 p-1 h-64">
            <Link to="./swissrolls" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/swissrolls.jpg"
                  alt="Muffins"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">SwissRolls</span>
              </div>
            </Link>
          </div>

          <div className="w-full pb-2 mb-2 p-1 h-64">
            <Link to="./muffins" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/muffins.jpg"
                  alt="Muffins"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <span className="absolute bottom-2 px-3 py-3 left-2 text-white ">Muffins</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
