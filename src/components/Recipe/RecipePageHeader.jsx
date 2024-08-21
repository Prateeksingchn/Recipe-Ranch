import React from "react";
import { Link } from "react-router-dom";

const RecipePageHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1
          className="text-6xl font-bold text-[#EE4130] "
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Our Recipes
        </h1>
        <h4 className="text-zinc-500 text-lg mt-4 font-['Roboto', sans-serif] ">
          Discover delicious recipes from around the world
        </h4>
      </div>
      <Link
        to="/create-recipe"
        className="bg-[#EE4130] text-white font-bold py-3 px-5 rounded-3xl hover:bg-[#c73524] transition-colors duration-300"
      >
        Create New Recipe
      </Link>
    </div>
  );
};

export default RecipePageHeader;