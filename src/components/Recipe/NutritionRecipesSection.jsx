import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Leaf } from "lucide-react";
import SimplifiedNutritionRecipeCard from './SimplifiedNutritionRecipeCard';
import defaultNutritionRecipes from '../../data/nutritionRecipes';  // Import default nutrition recipes

const NutritionRecipesSection = ({ nutritionRecipes = [] }) => {
  const recipes = nutritionRecipes.length > 0 ? nutritionRecipes : defaultNutritionRecipes;
  const limitedRecipes = recipes.slice(0, 4);

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-green-800">Nutrition Recipes</h2>
        <Link
          to="/nutrition"
          className="text-green-600 hover:text-green-800 flex items-center transition-colors duration-300"
        >
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedRecipes.map((recipe) => (
            <SimplifiedNutritionRecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Leaf className="mx-auto h-16 w-16 text-green-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No nutrition recipes yet</h3>
          <p className="text-gray-500 mb-6">Start your journey to healthier eating by creating your first nutrition recipe!</p>
          <Link
            to="/create-nutrition-recipe"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Nutrition Recipe
          </Link>
        </div>
      )}
    </div>
  );
};

export default NutritionRecipesSection;