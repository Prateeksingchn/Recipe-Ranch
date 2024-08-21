import React from "react";
import { AnimatePresence } from "framer-motion";
import RecipeList from "./RecipeList";

const AllRecipes = ({ allRecipes, isLoading }) => {
  return (
    <div className="bg-cyan-300 px-6 pt-10 pb-6 rounded-3xl ">
      <h2 className="text-3xl mb-5 tracking-wider font-[righteous] text-[#cc0000] ">All Recipes</h2>
      <AnimatePresence>
        {isLoading ? (
          <p className="text-center text-xl">Loading recipes...</p>
        ) : (
          <RecipeList recipes={allRecipes} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllRecipes;