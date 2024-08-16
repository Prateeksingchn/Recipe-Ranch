import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Bookmark } from 'lucide-react';

const Details = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

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
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Recipe not found</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          &larr; Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/Recipes" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Recipes
      </Link>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-96">
          <img src={recipe.image} alt={recipe.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{recipe.label}</h1>
              <p className="text-lg">Source: {recipe.source}</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap justify-between mb-6">
            <div className="flex items-center mr-4 mb-2">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              <span>{recipe.totalTime} min</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Users className="w-5 h-5 mr-2 text-gray-600" />
              <span>{recipe.yield} servings</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <ChefHat className="w-5 h-5 mr-2 text-gray-600" />
              <span>{recipe.cuisineType.join(', ')}</span>
            </div>
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              <Bookmark className="w-5 h-5 mr-2" />
              Save Recipe
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Nutrition</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Per serving:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {Object.entries(recipe.totalNutrients).slice(0, 8).map(([key, nutrient]) => (
                    <li key={key} className="text-sm">
                      <span className="font-semibold">{nutrient.label}:</span> {Math.round(nutrient.quantity)} {nutrient.unit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Health Labels</h2>
            <div className="flex flex-wrap">
              {recipe.healthLabels.map((label, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300"
            >
              View Full Recipe Instructions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;