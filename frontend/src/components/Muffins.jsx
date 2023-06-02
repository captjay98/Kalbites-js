import { Link } from "react-router-dom";
import InfoBar from "./InfoBar";

const Muffins = () => {
  const description = "Indulge in Chocolate Goodness";
  return (
    <div className="h-screen">
      <InfoBar description={description} />
      <div className="m-auto mt-5 px-2 py-5 mb-5 pb-5  w-11/12 rounded-3xl">
        <div className="overflow-auto flex flex-wrap  mb-5 pb-5 ">
          <h3 className="text-center mt-5 mb-5 pt-2 pb-2 text-yellow-500 text-bold">Muffins</h3>
          <div className="w-full pb-2 mb-2 p-1 h-64">
            <Link to="./Item" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/muffins.jpg"
                  alt="muffins"
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

export default Muffins;