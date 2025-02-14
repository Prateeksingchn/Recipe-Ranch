import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import lunchRecipes from "../../data/lunchRecipes";
import { useSelector } from "react-redux";

const LunchRecipeDetails = () => {
  const { recipeSlug } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { recipes: userRecipes } = useSelector((state) => state.recipeReducer);

  useEffect(() => {
    window.scrollTo(0, 0);

    // First, check if the recipe exists in user-created recipes
    const userRecipe = userRecipes.find(
      (r) => r.title.toLowerCase().replace(/\s/g, "-") === recipeSlug
    );

    if (userRecipe) {
      setRecipe(userRecipe);
    } else {
      // If not found in user recipes, check static recipes
      const staticRecipe = lunchRecipes.find(
        (r) => r.name.toLowerCase().replace(/\s/g, "-") === recipeSlug
      );
      setRecipe(staticRecipe);
    }
  }, [recipeSlug, userRecipes]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl">Recipe not found.</p>
      </div>
    );
  }

  return (
    <motion.section
      className="pt-5 pb-10 px-4 sm:px-4 md:px-6 lg:px-6 my-4 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/lunch-recipes">
        <button className="mt-8 ml-[19.3%] mb-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Lunch Recipes
        </button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-xl shadow-neutral-300 overflow-hidden p-2 sm:p-4 md:p-6 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full">
            <img
              src={recipe.image}
              alt={recipe.title || recipe.name}
              className="w-full h-[400px] object-cover mx-auto rounded-lg md:w-[600px] md:h-[400px]"
            />
          </div>
          <div className="w-full px-2 sm:px-2 md:px-5 lg:px-5 mt-5 flex flex-col items-center justify-center md:w-[600px] md:mx-auto">
            <h1 className="text-3xl font-semibold mb-6">{recipe.title || recipe.name}</h1>
            <div className="flex justify-start items-center gap-4 sm:gap-2 md:gap-6 lg:gap-6 text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <Clock size={20} className="mr-1" /> {recipe.time} min
              </span>
              <span className="flex items-center">
                <Users size={20} className="mr-1" /> {recipe.servings} servings
              </span>
              <span className="flex items-center text-yellow-500">
                <Star size={16} className="mr-1" fill="currentColor" />{" "}
                {recipe.rating || "N/A"}
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-center">{recipe.description}</p>
          </div>
          <div className="py-4 px-4 sm:py-4 sm:px-4 md:py-8 md:px-10 lg:py-8 lg:px-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="list-disc pl-6 mr-6 text-gray-700 mb-6">
                {Array.isArray(recipe.ingredients)
                  ? recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))
                  : recipe.ingredients.split(',').map((ingredient, index) => (
                      <li key={index}>{ingredient.trim()}</li>
                    ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <ol className="list-decimal pl-6 text-gray-700">
                {Array.isArray(recipe.instructions)
                  ? recipe.instructions.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))
                  : recipe.instructions.split('.').filter(Boolean).map((step, index) => (
                      <li key={index}>{step.trim()}</li>
                    ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LunchRecipeDetails;