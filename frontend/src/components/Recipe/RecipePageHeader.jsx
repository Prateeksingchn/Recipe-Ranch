import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const RecipePageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 bg-transparent rounded-3xl shadow-lg shadow-slate-400 p-4 sm:p-4 md:p-6 lg:p-6">
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

      <div className="ml-2 flex flex-col sm:flex-col md:flex-col lg:flex-row space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-0 space-x-0 sm:space-x-0 md:space-x-0 lg:space-x-4">
        <Link
          to="/create-recipe"
          className="w-[247px] sm:w-[250px] md:w-[250px] lg:w-[250px] bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold py-3 px-2 sm:px-2 md:px-6 lg:px-6 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Create Recipe
        </Link>

        <Link
          to="/create-nutrition-recipe"
          className="w-[247px] sm:w-[250px] md:w-[250px] lg:w-[250px] bg-[#3498DB] hover:bg-blue-600 text-white font-semibold py-3 px-2 sm:px-2 md:px-6 lg:px-6 rounded-full flex items-center justify-center transition-colors duration-300"
        >
          <PlusCircle className="h-5 w-5 mr-2" />
          Create Nutrition Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipePageHeader;