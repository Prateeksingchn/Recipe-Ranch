import React, { useState } from 'react';
import { Plus, X, ChevronDown } from 'lucide-react';

const CreateNutritionRecipe = ({ onAddRecipe, onClose }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    chef: '',
    image: '',
    calories: '',
    time: '',
    dietType: '',
    mealCategory: '',
    difficulty: '',
    ingredients: [''],
    instructions: [''],
    nutritionFacts: {
      protein: '',
      carbs: '',
      fat: '',
      fiber: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleNutritionChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      nutritionFacts: { ...recipe.nutritionFacts, [name]: value },
    });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...recipe[field]];
    updatedArray[index] = value;
    setRecipe({ ...recipe, [field]: updatedArray });
  };

  const addArrayField = (field) => {
    setRecipe({ ...recipe, [field]: [...recipe[field], ''] });
  };

  const removeArrayField = (field, index) => {
    const updatedArray = recipe[field].filter((_, i) => i !== index);
    setRecipe({ ...recipe, [field]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe({
      ...recipe,
      id: Date.now().toString(),
      calories: parseInt(recipe.calories),
      time: parseInt(recipe.time),
      nutritionFacts: {
        protein: parseFloat(recipe.nutritionFacts.protein),
        carbs: parseFloat(recipe.nutritionFacts.carbs),
        fat: parseFloat(recipe.nutritionFacts.fat),
        fiber: parseFloat(recipe.nutritionFacts.fiber),
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Create New Nutrition Recipe</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
              <input
                id="title"
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="chef" className="block text-sm font-medium text-gray-700">Chef Name</label>
              <input
                id="chef"
                type="text"
                name="chef"
                value={recipe.chef}
                onChange={handleChange}
                placeholder="Enter chef name"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              id="image"
              type="text"
              name="image"
              value={recipe.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="calories" className="block text-sm font-medium text-gray-700">Calories</label>
              <input
                id="calories"
                type="number"
                name="calories"
                value={recipe.calories}
                onChange={handleChange}
                placeholder="Enter calories"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time (minutes)</label>
              <input
                id="time"
                type="number"
                name="time"
                value={recipe.time}
                onChange={handleChange}
                placeholder="Enter cooking time"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
              <select
                id="difficulty"
                name="difficulty"
                value={recipe.difficulty}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="dietType" className="block text-sm font-medium text-gray-700">Diet Type</label>
              <select
                id="dietType"
                name="dietType"
                value={recipe.dietType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Diet Type</option>
                <option value="Vegan">Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Keto">Keto</option>
                <option value="Low-Carb">Low-Carb</option>
                <option value="High-Protein">High-Protein</option>
                <option value="Gluten-Free">Gluten-Free</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="mealCategory" className="block text-sm font-medium text-gray-700">Meal Category</label>
              <select
                id="mealCategory"
                name="mealCategory"
                value={recipe.mealCategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Meal Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Ingredients</h3>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleArrayChange(index, 'ingredients', e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeArrayField('ingredients', index)}
                  className="p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('ingredients')}
              className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <Plus size={20} className="mr-2" /> Add Ingredient
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Instructions</h3>
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  value={instruction}
                  onChange={(e) => handleArrayChange(index, 'instructions', e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeArrayField('instructions', index)}
                  className="p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('instructions')}
              className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <Plus size={20} className="mr-2" /> Add Instruction
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Nutrition Facts (in grams)</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(recipe.nutritionFacts).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
                  <input
                    id={key}
                    type="number"
                    name={key}
                    value={value}
                    onChange={handleNutritionChange}
                    placeholder={`Enter ${key}`}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-lg font-semibold"
          >
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNutritionRecipe;