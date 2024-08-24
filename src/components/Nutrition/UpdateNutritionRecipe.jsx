import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

const UpdateNutritionRecipe = ({ recipe, onUpdate, onClose }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  const handleNutritionChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({
      ...updatedRecipe,
      nutritionFacts: { ...updatedRecipe.nutritionFacts, [name]: value },
    });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...updatedRecipe[field]];
    updatedArray[index] = value;
    setUpdatedRecipe({ ...updatedRecipe, [field]: updatedArray });
  };

  const addArrayField = (field) => {
    setUpdatedRecipe({ ...updatedRecipe, [field]: [...updatedRecipe[field], ''] });
  };

  const removeArrayField = (field, index) => {
    const updatedArray = updatedRecipe[field].filter((_, i) => i !== index);
    setUpdatedRecipe({ ...updatedRecipe, [field]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...updatedRecipe,
      calories: parseInt(updatedRecipe.calories),
      time: parseInt(updatedRecipe.time),
      nutritionFacts: {
        protein: parseFloat(updatedRecipe.nutritionFacts.protein),
        carbs: parseFloat(updatedRecipe.nutritionFacts.carbs),
        fat: parseFloat(updatedRecipe.nutritionFacts.fat),
        fiber: parseFloat(updatedRecipe.nutritionFacts.fiber),
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Update Nutrition Recipe</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Recipe Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="chef"
            value={recipe.chef}
            onChange={handleChange}
            placeholder="Chef Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="calories"
              value={recipe.calories}
              onChange={handleChange}
              placeholder="Calories"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              name="time"
              value={recipe.time}
              onChange={handleChange}
              placeholder="Time (minutes)"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <select
            name="dietType"
            value={recipe.dietType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
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
          <select
            name="mealCategory"
            value={recipe.mealCategory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Meal Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <select
            name="difficulty"
            value={recipe.difficulty}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <div>
            <h3 className="font-semibold mb-2">Ingredients</h3>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleArrayChange(index, 'ingredients', e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-grow p-2 border rounded-l"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeArrayField('ingredients', index)}
                  className="bg-red-500 text-white p-2 rounded-r"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('ingredients')}
              className="w-full bg-green-500 text-white p-2 rounded flex items-center justify-center"
            >
              <Plus size={20} className="mr-2" /> Add Ingredient
            </button>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Instructions</h3>
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={instruction}
                  onChange={(e) => handleArrayChange(index, 'instructions', e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="flex-grow p-2 border rounded-l"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeArrayField('instructions', index)}
                  className="bg-red-500 text-white p-2 rounded-r"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('instructions')}
              className="w-full bg-green-500 text-white p-2 rounded flex items-center justify-center"
            >
              <Plus size={20} className="mr-2" /> Add Instruction
            </button>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Nutrition Facts (in grams)</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="protein"
                value={recipe.nutritionFacts.protein}
                onChange={handleNutritionChange}
                placeholder="Protein"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="carbs"
                value={recipe.nutritionFacts.carbs}
                onChange={handleNutritionChange}
                placeholder="Carbs"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="fat"
                value={recipe.nutritionFacts.fat}
                onChange={handleNutritionChange}
                placeholder="Fat"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="fiber"
                value={recipe.nutritionFacts.fiber}
                onChange={handleNutritionChange}
                placeholder="Fiber"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
          >
            Update Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateNutritionRecipe;