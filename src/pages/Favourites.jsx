import React from "react";
import { useNavigate } from "react-router-dom";

const Favourites = ({ favorites = [], removeFromFavorites }) => {
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold mt-15 md:mt-45">
              No favorites added yet!
            </p>
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer relative"
          >
            <img
              className="w-full h-48 object-cover"
              src={recipe.image_url}
              alt={recipe.title}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            />
            <div className="p-6" onClick={() => navigate(`/recipe/${recipe.id}`)}>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">By {recipe.publisher}</p>
            </div>

            {/* Remove button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigating when clicking remove
                removeFromFavorites(recipe.id);
              }}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
