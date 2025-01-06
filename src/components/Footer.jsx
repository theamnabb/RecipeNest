import React from 'react'

const Footer = () => {
  return (
    <footer className="footer  flex flex-col justify-center  items-center gap-3 bg-red-200 py-10 text-gray-600 ">
      <h2 className="brand text-4xl font-semibold text-center italic ">
        Recipe<span className=" text-red-500 ">Nest</span>
      </h2>
      <p className="text-gray-700">
        &copy; 2024 RecipeNest. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer