import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Clock, ChefHat, Flame, Award, Leaf, ArrowLeft } from "lucide-react";
import nutritionRecipes from "@/data/nutritionRecipes";

const NutritionRecipeDetail = () => {
  const { id } = useParams();
  const recipe = nutritionRecipes.find((r) => r.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        Recipe not found
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center rounded-3xl -mt-5">
      <Link
        to="/nutrition"
        className="mr-4 p-2 absolute top-[130px] left-8 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
      >
        <ArrowLeft size={24} className="text-gray-600" />
      </Link>
      <div className="bg-[#f5f5f5be] shadow-2xl shadow-slate-400 rounded-xl overflow-hidden flex w-full max-w-7xl h-[650px] p-5">
        {/* Left side - Image */}
        <div className="w-[35%] h-auto relative rounded-2xl overflow-hidden ">
          <img
            src={`/${recipe.image}`}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <ChefHat size={20} className="mr-2" />
                {recipe.chef}
              </span>
              <span className="flex items-center">
                <Award size={20} className="mr-2" />
                {recipe.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Scrollable content */}
        <div className="w-[65%] overflow-y-auto px-8 py-2">
          {/* Recipe quick info */}
          <h1 className="text-2xl font-semibold mb-4">{recipe.title}</h1>
          <div className="flex flex-wrap justify-between items-center mb-8 bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex items-center mb-2 mr-4">
              <Clock size={24} className="text-green-500 mr-2" />
              <span className="font-semibold">{recipe.time} mins</span>
            </div>
            <div className="flex items-center mb-2 mr-4">
              <Flame size={24} className="text-orange-500 mr-2" />
              <span className="font-semibold">{recipe.calories} cal</span>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
              {recipe.dietType}
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
              {recipe.mealCategory}
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
              {recipe.difficulty}
            </div>
          </div>

          {/* Nutrition Facts */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nutrition Facts</h2>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner shadow-slate-400">
              <div className="grid grid-cols-4 gap-6">
                {Object.entries(recipe.nutritionFacts).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-3xl font-bold text-green-500">
                      {value}g
                    </p>
                    <p className="text-gray-600 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-2 bg-gray-50 p-6 rounded-lg shadow-inner">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <Leaf size={16} className="text-green-500 mr-2" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex bg-gray-50 p-4 rounded-lg shadow"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </span>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionRecipeDetail;