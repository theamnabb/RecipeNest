import React, { useState } from "react";
import FryingPan from "../components/FryingPan/FryingPan";
import Recipe from "../components/Recipe";

const Home = () => {
  const [query, setQuery] = useState(""); // User input
  const [recipes, setRecipes] = useState([]); // Store recipe data

  // Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Fetch recipe data
  const fetchData = () => {
    if (!query.trim()) {
      setRecipes([]);
      return;
    }

    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.recipes?.length) {
          setRecipes(data.data.recipes);
        } else {
          setRecipes([]);
        }
      });
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <>
      {/* Search Input */}
      <div className="relative flex justify-center items-center mx-5 md:m-0 mt-6">
        <input
          type="text"
          className="w-[500px] p-2 ps-10 text-sm text-gray-900 shadow-lg border border-red-100 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600"
          placeholder="Search Recipe..."
          onChange={handleChange}
          value={query}
          onKeyDown={handleKeyPress} // Enter key to search
        />
        <i
          className="fa fa-search absolute left-4 md:left-37 lg:left-1/3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          onClick={fetchData} // Click to search
        ></i>
      </div>

      {/* Display Recipes */}
      <div className="flex justify-center mt-6">
        {recipes.length > 0 ? (
          <Recipe recipes={recipes} />
        ) : query ? (
          <p className="text-red-500 text-center">No recipes found</p>
        ) : (
          <div className="text-center mt-6">
            <p className="lg:text-4xl text-xl text-red-300 font-semibold">
              Nothing to show, please search something!
            </p>
            <FryingPan />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
