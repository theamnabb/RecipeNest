import  { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavs);
  }, []);

  const addToFavorites = (recipe) => {
    if (favorites.find((fav) => fav.id === recipe.id)) {
      alert("Recipe already in favorites!");
      return;
    }
    const updated = [...favorites, recipe];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header favorites={favorites} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home addToFavorites={addToFavorites} />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetail addToFavorites={addToFavorites} />}
          />
          <Route
            path="/favourite"
            element={<Favourites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
