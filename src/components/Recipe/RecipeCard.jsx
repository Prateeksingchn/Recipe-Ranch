import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeCard = ({ recipe, isUserCreated }) => {
  const recipeId = isUserCreated
    ? recipe.id
    : encodeURIComponent(recipe.uri?.split("#")[1]);
  const viewRecipeLink = isUserCreated
    ? `/created-recipes/${recipe.id}`
    : `/recipe/${recipeId}`;

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={recipe.image}
        alt={recipe.label || recipe.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {recipe.label || recipe.title}
        </h3>
        {/* <p className="text-gray-600 mt-2">
          {recipe.source || recipe.chefName}
        </p> */}
        <div className="mt-2 space-y-1">
          {(recipe.cuisineType?.[0] || recipe.category) && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {recipe.cuisineType?.[0] || recipe.category}
            </span>
          )}
          {recipe.subcategory && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {recipe.subcategory}
            </span>
          )}
        </div>
        <Link to={viewRecipeLink}>
          <button className="bg-green-600 w-full text-white py-2 px-4 mt-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out">
            View Recipe
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RecipeCard;