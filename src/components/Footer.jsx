import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center items-center bg-red-200 py-10 text-gray-600 ">
      <h2 className="text-4xl font-semibold text-center italic ">
        Recipe<span className=" text-red-500 ">Nest</span>
      </h2>
      <p className="text-gray-700">
        &copy; {year} RecipeNest. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer