import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Eye, Clock, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import topRecipes from "../../data/topRecipes";

const RecipeCard = ({ recipe, index }) => (
  <Link to={`/top-recipe/${recipe.id}`} className="block">
    <motion.div
      className="relative overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-lg w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[530px] group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <img
        src={`/${recipe.image}`}
        alt={recipe.title}
        className="w-full h-full object-cover object-left-top transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-xs sm:text-sm mb-2 sm:mb-3 flex items-center">
          <ChefHat size={14} className="mr-1 sm:mr-2" />
          {recipe.chef}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center text-xs sm:text-sm">
            <Eye size={14} className="mr-1 sm:mr-2" />
            {recipe.views} views
          </span>
          <span className="flex items-center text-xs sm:text-sm">
            <Clock size={14} className="mr-1 sm:mr-2" />
            {recipe.time} mins
          </span>
        </div>
      </div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-yellow-400 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
        {recipe.category}
      </div>
    </motion.div>
  </Link>
);

const TopRecipes = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16 bg-gray-100 rounded-[20px] sm:rounded-[30px]">
      <div className="container mx-auto px-4">
        <h2 className="text-[27px] sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 text-[#333] relative inline-block left-1/2 transform -translate-x-1/2">
          <span
            className="relative z-10"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Most Viewed Recipes
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-yellow-300 transform -skew-x-12"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {topRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default TopRecipes;