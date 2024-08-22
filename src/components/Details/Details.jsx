import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Bookmark, ArrowLeft } from 'lucide-react';

const RecipeBlog = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setIsLoading(true);
      try {
        const APP_ID = '7b948bd8';
        const APP_KEY = 'c1f4f91b2d5ffb2918347647551d908f';
        const response = await fetch(`https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23recipe_${id}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        if (data && data[0]) {
          setRecipe(data[0]);
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Recipe not found</h1>
        <Link to="/" className="text-green-600 hover:text-green-700 transition duration-300">
          <ArrowLeft className="inline mr-2" />
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/Recipes" className="text-green-600 hover:text-green-700 transition duration-300 mb-8 inline-block">
        <ArrowLeft className="inline mr-2" />
        Back to Recipes
      </Link>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img src={recipe.image} alt={recipe.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2 leading-tight">{recipe.label}</h1>
            <p className="text-lg opacity-75">by {recipe.source}</p>
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap justify-between mb-8 text-sm text-gray-600">
            <div className="flex items-center mr-4 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>{recipe.totalTime} min</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span>{recipe.yield} servings</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <ChefHat className="w-5 h-5 mr-2" />
              <span>{recipe.cuisineType.join(', ')}</span>
            </div>
            <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
              <Bookmark className="w-5 h-5 mr-2" />
              Save Recipe
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nutrition</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-700">Per serving:</h3>
                <ul className="grid grid-cols-2 gap-y-2">
                  {Object.entries(recipe.totalNutrients).slice(0, 8).map(([key, nutrient]) => (
                    <li key={key} className="text-sm flex justify-between">
                      <span className="font-medium text-gray-600">{nutrient.label}:</span>
                      <span className="text-gray-800">{Math.round(nutrient.quantity)} {nutrient.unit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Health Labels</h2>
            <div className="flex flex-wrap">
              {recipe.healthLabels.map((label, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full">
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300 transform hover:scale-105"
            >
              View Full Recipe Instructions
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RecipeBlog;