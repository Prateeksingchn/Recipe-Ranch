import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const RecipePageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 bg-white rounded-3xl shadow-lg p-6">
      <div className="mb-6 sm:mb-0">
        <h1
          className="text-5xl font-bold text-[#EE4130] mb-2"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Recipe Collection
        </h1>
        <h4 className="text-zinc-500 text-lg font-['Roboto', sans-serif]">
          Discover delicious recipes from around the world
        </h4>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/create-recipe"
          className="bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Create Recipe
        </Link>

        <Link
          to="/create-nutrition-recipe"
          className="bg-[#3498DB] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Create Nutrition Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipePageHeader;