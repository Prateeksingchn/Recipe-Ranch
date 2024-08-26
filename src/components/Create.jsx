import React, { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes } = useSelector((state) => state.recipeReducer);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [chefName, setChefName] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients,
      instructions,
      category,
      subcategory,
      time: parseInt(time),
      servings: parseInt(servings),
      difficulty,
      chefName,
    };

    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
    dispatch(asyncgetrecipies());
    toast.success("Recipe Created Successfully!");
    navigate("/recipes");
  };

  const handleBack = () => {
    navigate("/recipes");
  };

  return (
    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
      <button
        onClick={handleBack}
        className="mt-8 mb-8 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Recipes
      </button>
      <form onSubmit={SubmitHandler} className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-600 sm:text-5xl md:text-6xl">
            Create New Recipe
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Share your culinary masterpiece with the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Recipe Image
              </label>
              <div className="mt-1 flex items-center space-x-10">
                <input
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  type="url"
                  className="flex-grow shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Recipe Image URL"
                />
                {image && (
                  <img
                    src={image}
                    alt="Recipe preview"
                    className="h-56 w-56 object-cover rounded-md"
                  />
                )}
              </div>
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Recipe Name
              </label>
              <input
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter recipe name"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows={3}
                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Describe your recipe..."
              ></textarea>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-6">
            {/* Ingredients */}
            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700"
              >
                Ingredients
              </label>
              <textarea
                id="ingredients"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                rows={4}
                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="List ingredients (separate with commas)"
              ></textarea>
            </div>

            {/* Instructions */}
            <div>
              <label
                htmlFor="instructions"
                className="block text-sm font-medium text-gray-700"
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                onChange={(e) => setInstructions(e.target.value)}
                value={instructions}
                rows={6}
                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Explain the cooking process step by step..."
              ></textarea>
            </div>

            {/* Category and Subcategory */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Category</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subcategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subcategory
                </label>
                <select
                  id="subcategory"
                  onChange={(e) => setSubcategory(e.target.value)}
                  value={subcategory}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Subcategory</option>
                  <option value="indian">Indian</option>
                  <option value="italian">Italian</option>
                  <option value="american">American</option>
                  <option value="thai">Thai</option>
                  <option value="french">French</option>
                  <option value="japanese">Japanese</option>
                  <option value="mexican">Mexican</option>
                  <option value="chinese">Chinese</option>
                  <option value="european">European</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Cooking Time, Servings, Difficulty, Chef Name */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cooking Time (minutes)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="time"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    type="number"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Cooking time"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="servings"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Servings
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="servings"
                    onChange={(e) => setServings(e.target.value)}
                    value={servings}
                    type="number"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Number of servings"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  onChange={(e) => setDifficulty(e.target.value)}
                  value={difficulty}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="chefName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chef Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ChefHat className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="chefName"
                    onChange={(e) => setChefName(e.target.value)}
                    value={chefName}
                    type="text"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Your name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Publish Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;