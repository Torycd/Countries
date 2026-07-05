import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const NavBar = ({ handleBack, setIsDark, isDark }) => {
  return (
    <div className="element flex justify-between shadow-xl py-6 px-4 sm:px-20 font-bold">
      <h2 onClick={handleBack}>Where in the world?</h2>
      <div
        onClick={() => setIsDark(!isDark)}
        className="flex items-center gap-4 element"
      >
        <span>{!isDark ? <FaRegMoon /> : <FaRegSun/>}</span>
        <p>{!isDark ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default NavBar;
