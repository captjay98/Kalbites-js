import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed bottom-0 w-full bg-yellow-500 px-2 py-1 rounded-tl-3xl rounded-tr-3xl">
      <ul className="flex justify-between px-3 py-1 text-center text-myBlue">
        <li
          className={`flex-1 rounded-3xl ${
            activeTab === "home" ? "bg-myBlue text-yellow-400" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          <NavLink
            to="/"
            className="block py-2 px-2 hover:bg-gray-400"
            activeclassname="active-tab"
          >
            Home
          </NavLink>
        </li>
        <li
          className={`flex-1 rounded-3xl   ${
            activeTab === "blogs" ? "bg-myBlue text-yellow-400" : ""
          }`}
          onClick={() => handleTabClick("blogs")}
        >
          <NavLink
            to="/blogs"
            className="block py-2 px-2 hover:bg-gray-400"
            activeclassname="active-tab"
          >
            Blog
          </NavLink>
        </li>
        <li
          className={`flex-1 rounded-3xl  ${
            activeTab === "account" ? "bg-myBlue text-yellow-400" : ""
          }`}
          onClick={() => handleTabClick("account")}
        >
          <NavLink
            to="/account"
            className="block py-2 px-2 hover:bg-gray-400"
            activeclassname="active-tab"
          >
            Account
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
