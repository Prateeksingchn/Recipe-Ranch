import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import dinnerRecipes from "../../data/dinnerRecipes";

const DinnerRecipeDetails = () => {
  const { recipeSlug } = useParams();
  const recipe = dinnerRecipes.find(
    (r) => r.name.toLowerCase().replace(/\s/g, "-") === recipeSlug
  );

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl">Recipe not found.</p>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      className="pt-5 pb-10 px-6 my-4 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/dinner-recipes">
        <button className="mt-8 ml-[6%] mb-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Dinner Recipes
        </button>
      </Link>

      <div className="max-w-4xl mx-auto ">
        <motion.div
          className="bg-white rounded-xl shadow-xl shadow-neutral-300 overflow-hidden p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-[600px] h-[400px] object-cover mx-auto rounded-lg"
            />
          </div>
          <div className="w-[600px] mx-auto px-5 mt-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mb-6">{recipe.name}</h1>
            <div className="flex justify-start items-center gap-20 text-sm text-gray-500 mb-6">
              <span className="flex items-center">
                <Clock size={20} className="mr-1" /> {recipe.time}
              </span>
              <span className="flex items-center">
                <Users size={20} className="mr-1" /> {recipe.servings} servings
              </span>
              <span className="flex items-center text-yellow-500">
                <Star size={16} className="mr-1" fill="currentColor" />{" "}
                {recipe.rating}
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-center">{recipe.description}</p>
          </div>
          <div className="p-8 grid grid-cols-2 px-1o ">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="list-disc pl-6 mr-6 text-gray-700 mb-6">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <ol className="list-decimal pl-6 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DinnerRecipeDetails;
