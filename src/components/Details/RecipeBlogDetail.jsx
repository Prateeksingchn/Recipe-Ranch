import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Clock,
  Users,
  Utensils,
  CookingPot,
  ArrowLeft,
} from "lucide-react";

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
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="animate-pulse space-y-4">
          <div className="bg-gray-300 h-64 rounded-lg"></div>
          <div className="bg-gray-300 h-8 w-3/4 rounded"></div>
          <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          <div className="bg-gray-300 h-32 w-full rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 mt-8 bg-red-50 border border-red-200 rounded-lg max-w-4xl">
        <h2 className="text-red-600 text-xl font-bold mb-2">Error</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {recipe.readyInMinutes} minutes
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {recipe.servings} servings
              </span>
              {recipe.diets.map((diet) => (
                <span
                  key={diet}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {diet}
                </span>
              ))}
            </div>

            <div
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <Utensils className="w-6 h-6 mr-2 text-amber-500" />
                Ingredients
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <CookingPot className="w-6 h-6 mr-2 text-amber-500" />
                Instructions
              </h3>
              <ol className="list-decimal pl-5 space-y-4">
                {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step.step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default RecipeBlogDetail;
