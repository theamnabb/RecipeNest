import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = ({ addToFavorites }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.data.recipe);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image_url} alt={recipe.title} className="rounded mb-4" />
      <p><strong>Publisher:</strong> {recipe.publisher}</p>
      <p><strong>Source:</strong> <a href={recipe.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{recipe.source_url}</a></p>

      <h2 className="mt-6 text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing.quantity} {ing.unit} {ing.description}</li>
        ))}
      </ul>

      <button
        onClick={() => addToFavorites(recipe)}
        className="mt-6 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600 transition cursor-pointer"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default RecipeDetail;
