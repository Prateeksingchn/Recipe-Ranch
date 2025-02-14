import React, { useState } from 'react';

const CUISINE_TYPES = [
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
  "Mexican",
  "Thai",
  "Mediterranean",
  "French",
  "American",
  "Korean",
  "Middle Eastern",
  "Spanish",
  "Greek",
  "Vietnamese",
  "Brazilian"
];

const DIETARY_PREFERENCES = [
  "No Preference",
  "Vegetarian",
  "Vegan",
  "Non-Vegetarian",
  "Non-Vegetarian (No Beef)",
  "Non-Vegetarian (No Pork)",
  "Gluten-Free",
  "Dairy-Free",
  "Keto",
  "Paleo",
  "Low-Carb",
  "Low-Fat",
  "High-Protein"
];

// Add this new component for the recipe display
const RecipeDisplay = ({ recipe }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in overflow-y-auto max-h-[800px]">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{recipe.title}</h2>
      
      {/* Recipe Description */}
      <p className="text-gray-600 mb-8 leading-relaxed">
        {recipe.description}
      </p>

      {/* Recipe Info Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-600">Cooking Time</p>
          <p className="text-lg font-semibold text-blue-800">{recipe.cookingTime}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-600">Servings</p>
          <p className="text-lg font-semibold text-green-800">{recipe.servings}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-600">Difficulty</p>
          <p className="text-lg font-semibold text-purple-800">{recipe.difficulty}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'ingredients', 'instructions', 'macros'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium capitalize transition-colors`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">About this Recipe</h3>
            <p className="text-gray-600 leading-relaxed">{recipe.description}</p>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <h4 className="font-semibold text-yellow-800 mb-2">Chef's Tips</h4>
              <p className="text-gray-700">{recipe.tips}</p>
            </div>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Ingredients</h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                    •
                  </span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'instructions' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Instructions</h3>
            <ol className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {activeTab === 'macros' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Nutritional Information</h3>
            <p className="text-gray-600 mb-4">Per serving:</p>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(recipe.macros).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 capitalize">{key}</p>
                  <p className="text-lg font-semibold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Create a config file or use environment variables
const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.com';

const AIRecipeGenerator = () => {
  const [formData, setFormData] = useState({
    ingredients: '',
    cuisine: '',
    dietaryPreferences: '',
    cookingTime: '',
    servings: '',
    difficulty: 'medium',
    mealType: ''
  });
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/api/generate-recipe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate recipe');
      }

      const data = await response.json();
      setGeneratedRecipe(data);
    } catch (error) {
      console.error('Error generating recipe:', error);
      setError('Failed to generate recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-cyan-100 to-purple-200 py-8 px-4 rounded-[30px] my-4">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            AI Recipe Generator
          </h2>
          <p className="text-gray-600">
            Get personalized recipe suggestions based on your preferences
          </p>
        </div>

        <div className="flex gap-6">
          {/* Left Column - Input Form (50% width) */}
          <div className="w-[40%] bg-white rounded-2xl shadow-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-gray-700 font-medium">
                  Ingredients (Optional)
                  <span className="text-sm text-gray-500 ml-2">Leave empty for random suggestions</span>
                </label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Enter ingredients (comma separated)&#10;e.g., chicken, rice, tomatoes"
                  rows="3"
                />
              </div>

              {/* Three selects in one row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="block text-gray-700 font-medium">
                    Cuisine Type
                  </label>
                  <select
                    name="cuisine"
                    value={formData.cuisine}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all [&>*]:bottom-auto [&>*]:top-full"
                  >
                    <option value="">Select cuisine</option>
                    {CUISINE_TYPES.map((cuisine) => (
                      <option key={cuisine} value={cuisine.toLowerCase()}>
                        {cuisine}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-700 font-medium">
                    Meal Type
                  </label>
                  <select
                    name="mealType"
                    value={formData.mealType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all [&>*]:bottom-auto [&>*]:top-full"
                  >
                    <option value="">Select meal type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                    <option value="dessert">Dessert</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-700 font-medium">
                    Dietary Preferences
                  </label>
                  <select
                    name="dietaryPreferences"
                    value={formData.dietaryPreferences}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all [&>*]:bottom-auto [&>*]:top-full"
                  >
                    <option value="">Select dietary preference</option>
                    {DIETARY_PREFERENCES.map((pref) => (
                      <option key={pref} value={pref.toLowerCase()}>
                        {pref}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-gray-700 font-medium">
                    Cooking Time
                  </label>
                  <select
                    name="cookingTime"
                    value={formData.cookingTime}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Any duration</option>
                    <option value="quick">Quick (15-30 mins)</option>
                    <option value="medium">Medium (30-60 mins)</option>
                    <option value="long">Long (60+ mins)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-700 font-medium">
                    Servings
                  </label>
                  <input
                    type="number"
                    name="servings"
                    value={formData.servings}
                    onChange={handleChange}
                    min="1"
                    max="12"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-gray-700 font-medium">
                  Difficulty Level
                </label>
                <div className="flex space-x-4">
                  {['easy', 'medium', 'hard'].map((level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="difficulty"
                        value={level}
                        checked={formData.difficulty === level}
                        onChange={handleChange}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2 capitalize">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-xl text-white font-semibold text-lg transition-all transform hover:scale-[1.02] ${
                  loading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Recipe...
                  </span>
                ) : (
                  'Generate Recipe'
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Generated Recipe (50% width) */}
          <div className="w-[60%] relative">
            {error ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            ) : loading ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="animate-pulse">Crafting your perfect recipe...</div>
                </div>
              </div>
            ) : generatedRecipe ? (
              <RecipeDisplay recipe={generatedRecipe} />
            ) : (
              <div className="bg-white/50 rounded-2xl border-2 border-dashed border-gray-300 p-8 h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg">Your recipe will appear here</p>
                  <p className="text-sm mt-2">Fill out the form to generate a recipe</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecipeGenerator;