import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import RecipeCard from './RecipeCard';  // Adjust the path if necessary

const UserCreatedRecipes = ({ userCreatedRecipes }) => {
  const limitedRecipes = userCreatedRecipes.slice(0, 4);

  return (       
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-[#cc0000] ">Latest Recipes</h2>
        {userCreatedRecipes.length > 4 && (
          <Link to="/latest" className="text-blue-500 hover:text-blue-700 flex items-center">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
      
      {userCreatedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {limitedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="mb-4">No recipes yet. Create your first recipe!</p>
          <Link to="/create-recipe" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Create Recipe
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserCreatedRecipes;