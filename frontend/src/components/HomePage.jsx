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
    <div className="max-w-lg">
      <InfoBar description={description} />
      <div className="py-5 px-2 pb-5 m-auto mt-1 mb-5 w-11/12 rounded-3xl">
        <div className="flex overflow-auto flex-wrap pb-5 mb-5">
          <div className="p-1 pb-2 mb-2 w-full h-64">
            <Link to="./brownies" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/muffins.jpg"
                  alt="Muffins"
                  className="object-cover w-full h-full rounded-3xl"
                />
                <span className="absolute bottom-2 left-2 py-3 px-3 text-white">
                  Brownies
                </span>
              </div>
            </Link>
          </div>

          <div className="p-1 pb-2 mb-2 w-full h-64">
            <Link to="./bentocakes" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="images/bentocake.jpg"
                  alt="Muffins"
                  className="object-cover w-full h-full rounded-3xl"
                />
                <span className="absolute bottom-2 left-2 py-3 px-3 text-white">
                  BentoCakes
                </span>
              </div>
            </Link>
          </div>

          <div className="p-1 pb-2 mb-2 w-full h-64">
            <Link to="./Cupcakes" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/cupcakes.jpg"
                  alt="Muffins"
                  className="object-cover w-full h-full rounded-3xl"
                />
                <span className="absolute bottom-2 left-2 py-3 px-3 text-white">
                  Cupcakes
                </span>
              </div>
            </Link>
          </div>

          <div className="p-1 pb-2 mb-2 w-full h-64">
            <Link to="./swissrolls" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/swissrolls.jpg"
                  alt="Muffins"
                  className="object-cover w-full h-full rounded-3xl"
                />
                <span className="absolute bottom-2 left-2 py-3 px-3 text-white">
                  SwissRolls
                </span>
              </div>
            </Link>
          </div>

          <div className="p-1 pb-2 mb-2 w-full h-64">
            <Link to="./muffins" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/muffins.jpg"
                  alt="Muffins"
                  className="object-cover w-full h-full rounded-3xl"
                />
                <span className="absolute bottom-2 left-2 py-3 px-3 text-white">
                  Muffins
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
