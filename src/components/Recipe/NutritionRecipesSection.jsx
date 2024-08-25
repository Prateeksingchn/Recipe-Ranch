import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from "lucide-react";
import SimplifiedNutritionRecipeCard from './SimplifiedNutritionRecipeCard';

const NutritionRecipesSection = ({ nutritionRecipes }) => {
  const limitedRecipes = nutritionRecipes.slice(0, 4);

  return (
    <div className="w-full">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-green-800">Nutrition Recipes</h2>
        <Link to="/nutrition">
          <button className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors duration-300">
            View All
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {limitedRecipes.map((recipe) => (
          <SimplifiedNutritionRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {nutritionRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No nutrition recipes yet. Create your first one!</p>
          <Link
            to="/create-nutrition-recipe"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
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