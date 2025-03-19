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
        setQuery("");
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
      <div className="relative flex justify-center items-center mx-5 md:m-0">
        <div className="relative w-[500px]">
          <input
            type="text"
            className="w-full p-2 pl-10 text-sm text-gray-900 shadow-lg border border-red-100 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600"
            placeholder="Search Recipe..."
            onChange={handleChange}
            value={query}
            onKeyDown={handleKeyPress} // Enter key to search
          />
          <i
            className="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={fetchData} // Click to search
          ></i>
        </div>
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
