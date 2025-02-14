import React from "react";
import { Link } from "react-router-dom";
import { Clock, Flame, ChefHat, Leaf, Edit, Trash } from "lucide-react";

const UserCreatedNutritionRecipeCard = ({ recipe, onDelete }) => {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600 shadow">
          {recipe.dietType}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
            {recipe.mealCategory}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{recipe.time} mins</span>
          </div>
          <div className="flex items-center">
            <Flame className="w-4 h-4 mr-1" />
            <span>{recipe.calories} kcal</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <ChefHat className="w-4 h-4 mr-2" />
          <span>{recipe.chef}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(recipe.nutritionFacts).map(([key, value]) => (
            <div key={key} className="bg-gray-100 rounded-lg p-2 text-center">
              <span className="block text-xs text-gray-500 capitalize">{key}</span>
              <span className="block text-sm font-semibold text-gray-700">{value}g</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between">
          <Link to={`/user-nutrition-recipe/${recipe.id}`} className="flex-1 mr-2">
            <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
              <Leaf className="w-5 h-5 mr-2" />
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCreatedNutritionRecipeCard;