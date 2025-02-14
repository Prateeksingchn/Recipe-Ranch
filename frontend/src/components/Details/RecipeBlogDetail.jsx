import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Clock,
  Users,
  Utensils,
  CookingPot,
  ArrowLeft,
  Star,
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
          <div className="bg-gray-300 h-8 w-3/4 rounded"></div>
          <div className="bg-gray-300 h-64 rounded-lg"></div>
          <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          <div className="bg-gray-300 h-32 w-full rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 mt-8 bg-red-50 border border-red-200 rounded-lg max-w-3xl">
        <h2 className="text-red-600 text-xl font-bold mb-2">Error</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-12 ">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-500 hover:text-blue-800 mb-6 transition duration-300"
        >
          <ArrowLeft className="w-8 h-8 mr-3 bg-slate-200 rounded-full p-1" />
          Back to Blog
        </Link>

        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {recipe.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {recipe.readyInMinutes} minutes
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {recipe.servings} servings
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                {recipe.spoonacularScore
                  ? (recipe.spoonacularScore / 20).toFixed(1)
                  : "N/A"}{" "}
                / 5
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.diets.map((diet) => (
                <span
                  key={diet}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {diet}
                </span>
              ))}
            </div>

            <div
              className="prose max-w-none mb-8 text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center text-gray-800">
                  <Utensils className="w-6 h-6 mr-2 text-amber-500" />
                  Ingredients
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {recipe.extendedIngredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center text-gray-800">
                  <CookingPot className="w-6 h-6 mr-2 text-amber-500" />
                  Instructions
                </h3>
                <ol className="space-y-4">
                  {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold text-amber-500 mr-2">
                        {index + 1}.
                      </span>
                      <p className="text-gray-700 leading-relaxed">
                        {step.step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default RecipeBlogDetail;
