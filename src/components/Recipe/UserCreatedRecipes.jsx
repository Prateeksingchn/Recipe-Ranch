import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Utensils } from "lucide-react";
import RecipeCard from './RecipeCard';
import defaultRecipes from '../../data/recipes';  // Import default recipes

const UserCreatedRecipes = ({ userCreatedRecipes = [] }) => {
  const recipes = userCreatedRecipes.length > 0 ? userCreatedRecipes : defaultRecipes;
  const limitedRecipes = recipes.slice(0, 4);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#cc0000]">Latest Recipes</h2>
        {recipes.length > 4 && (
          <Link to="/latest" className="text-blue-500 hover:text-blue-700 flex items-center transition-colors duration-300">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
      
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Utensils className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No recipes yet</h3>
          <p className="text-gray-500 mb-6">Start your culinary journey by creating your first recipe!</p>
          <Link 
            to="/create-recipe" 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 inline-flex items-center transition-colors duration-300"
          >
            <Plus className="mr-2 h-5 w-5" />
            Create Recipe
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserCreatedRecipes;