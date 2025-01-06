import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="brand text-2xl font-semibold  italic  ">
          Recipe<span className=" text-red-500 ">Next</span>
        </h2>
        {/* Form */}
        <form className="search-bar">
          <input
            type="search"
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
            placeholder="Search Items...."
          />
        </form>
        
      </nav>
    </>
  );
};

export default Header;
