import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Leaf } from "lucide-react";
import SimplifiedNutritionRecipeCard from './SimplifiedNutritionRecipeCard';
import defaultNutritionRecipes from '../../data/nutritionRecipes';

const NutritionRecipesSection = ({ nutritionRecipes = [] }) => {
  const recipes = nutritionRecipes.length > 0 ? nutritionRecipes : defaultNutritionRecipes;
  const limitedRecipes = recipes.slice(0, 4);

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-2 sm:mb-0">Nutrition Recipes</h2>
        {recipes.length > 0 && (
          <Link to="/nutrition" className="text-green-600 hover:text-green-800 flex items-center transition-colors duration-300">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
      
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {limitedRecipes.map((recipe) => (
            <SimplifiedNutritionRecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12 bg-gray-50 rounded-lg shadow-inner">
          <Leaf className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-green-400 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No nutrition recipes yet</h3>
          <p className="text-gray-500 mb-6 px-4">Start your journey to healthier eating by creating your first nutrition recipe!</p>
          <Link
            to="/create-nutrition-recipe"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 inline-flex items-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Create Nutrition Recipe
          </Link>
        </div>
      )}
    </div>
  );
};

export default NutritionRecipesSection;