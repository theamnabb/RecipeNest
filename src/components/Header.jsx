import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      

<nav class="bg-white border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap">RecipeNest</span>
    <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search">
        
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..."/>
      
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
