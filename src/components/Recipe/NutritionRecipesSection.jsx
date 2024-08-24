import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import SimplifiedNutritionRecipeCard from './SimplifiedNutritionRecipeCard';

const NutritionRecipesSection = ({ nutritionRecipes }) => {
  return (
    <div className="mb-8 bg-purple-100 p-6 rounded-3xl shadow-xl shadow-stone-300">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-3xl font-[Righteous] font-extralight text-blue-900">
          Nutrition Recipes
        </h2>
        <Link to="/nutrition">
          <button className="flex gap-[2px] underline text-blue-900 text-[15px] font-bold py-3 px-4 rounded-full hover:scale-105 duration-300">
            View All Nutrition Recipes
            <ArrowRight className="h-7 w-6 pb-1" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {nutritionRecipes.slice(0, 4).map((recipe) => (
          <SimplifiedNutritionRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {nutritionRecipes.length > 4 && (
        <div className="mt-0 text-center">
          {/* <Link
            to="/nutrition"
            className="text-white underline hover:text-green-200"
          >
            See more nutrition recipes...
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default NutritionRecipesSection;