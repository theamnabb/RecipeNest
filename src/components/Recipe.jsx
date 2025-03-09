import React from "react";
import { ArrowRight } from "lucide-react";

const Recipe = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Recipe Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              className="w-full h-48 object-cover"
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000"
              alt="Mountain landscape"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Beautiful Mountains
              </h2>
              <p className="text-gray-600 mb-4">
                Discover the majestic beauty of nature with our guided mountain
                tours.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer transition duration-300 ease-in-out">
                View Recipe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
