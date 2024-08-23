import React from "react";
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import lunchRecipes from "../../data/lunchRecipes";

const LunchRecipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      className="py-5 px-6 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/#explore">
        <button className="mt-8 ml-[6%] mb-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Explore
        </button>
      </Link>

      <div className="container mx-auto">
        <motion.h1
          className="text-6xl font-bold text-[#04039B] mb-6 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lunch Recipes
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-12 text-center max-w-lg mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover delicious lunch recipes that are quick and easy to make,
          perfect for a mid-day meal.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lunchRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> {recipe.time}
                  </span>
                  <span className="flex items-center">
                    <Users size={16} className="mr-1" /> {recipe.servings}{" "}
                    servings
                  </span>
                  <span className="flex items-center text-yellow-500">
                    <Star size={16} className="mr-1" fill="currentColor" />{" "}
                    {recipe.rating}
                  </span>
                </div>
                <Link
                  to={`/lunch-recipes/${recipe.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <button>View Recipe</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LunchRecipes;
