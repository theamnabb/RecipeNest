import React from "react";
import { useNavigate } from "react-router-dom";

const Favourites = ({ favorites = [] }) => {
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return <p className="p-6 text-center text-gray-600">No favorites added yet.</p>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          <img
            className="w-full h-48 object-cover"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">By {recipe.publisher}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
