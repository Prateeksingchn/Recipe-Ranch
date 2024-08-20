import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Clock, Users, Utensils } from "lucide-react";

const API_KEY = "52355b06aa4549bfa510d9b4f808b77a";

const RecipeBlogDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse">
          <div className="bg-gray-300 h-64 mb-4"></div>
          <div className="bg-gray-300 h-8 w-3/4 mb-2"></div>
          <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
          <div className="bg-gray-300 h-32 w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 mt-8 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-red-600 text-xl font-bold mb-2">Error</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/recipes"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to recipes
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {recipe.readyInMinutes} minutes
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {recipe.servings} servings
            </span>
            {recipe.diets.map((diet) => (
              <span key={diet} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                {diet}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Utensils className="w-5 h-5 mr-2" />
              Ingredients
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeBlogDetail;