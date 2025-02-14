import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import lunchRecipes from "../../data/lunchRecipes";
import { useSelector } from "react-redux";

const LunchRecipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const { recipes: userRecipes } = useSelector((state) => state.recipeReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Filter lunch recipes from user-created recipes
    const userLunchRecipes = userRecipes.filter(
      (recipe) => recipe.category.toLowerCase() === "lunch"
    );
    
    // Combine user-created lunch recipes with static lunch recipes
    setAllRecipes([...userLunchRecipes, ...lunchRecipes]);
  }, [userRecipes]);

  return (
    <motion.section
      className="py-5 px-6 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/#explore">
        <button className="mt-8 ml-[6%] mb-6 inline-flex items-center rounded-3xl bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Explore
        </button>
      </Link>

      <div className="container mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#04039B] mb-4 sm:mb-4 md:mb-6 lg:mb-6 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lunch Recipes
        </motion.h1>
        <motion.p
          className="text-base md:text-xl text-gray-700 mb-12 text-center max-w-lg mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover delicious lunch recipes that are quick and easy to make,
          perfect for a mid-day meal.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 md:gap-6 lg:gap-8">
          {allRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id || recipe.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                to={`/lunch-recipes/${(recipe.title || recipe.name)
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title || recipe.name}
                  className="w-full h-56 sm:h-48 object-cover"
                />
                <div className="px-6 py-3">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{recipe.title || recipe.name}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" /> {recipe.time} min
                    </span>
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" /> {recipe.servings} servings
                    </span>
                    <span className="flex items-center text-yellow-500">
                      <Star size={16} className="mr-1" fill="currentColor" />{" "}
                      {recipe.rating || "N/A"}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LunchRecipes;