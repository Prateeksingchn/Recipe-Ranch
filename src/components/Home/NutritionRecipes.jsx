import React, { useState, forwardRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Clock,
  ChevronRight,
  ChevronLeft,
  ChefHat,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import nutritionRecipes from "../../data/nutritionRecipes";

const NutritionRecipeCard = ({ recipe, index }) => (
  <Link to={`/nutrition-recipe/${recipe.id}`} className="block">
    <motion.div
      className="relative overflow-hidden rounded-[30px] shadow-lg w-full h-[500px] group"
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
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-[22px] font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-sm mb-3 flex items-center">
          <ChefHat size={16} className="mr-2" />
          {recipe.chef}
        </p>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center text-sm">
            <Leaf size={16} className="mr-2" />
            {recipe.calories} cal
          </span>
          <span className="flex items-center text-sm">
            <Clock size={16} className="mr-2" />
            {recipe.time} mins
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">{recipe.mealCategory}</span>
          <span className="flex items-center text-sm">
            <Award size={16} className="mr-2" />
            {recipe.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
        {recipe.dietType}
      </div>
      <div className="absolute top-4 left-4 bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
        {recipe.difficulty}
      </div>
    </motion.div>
  </Link>
);

const NutritionRecipes = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextRecipes = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= nutritionRecipes.length ? 0 : prevIndex + 3
    );
  };

  const prevRecipes = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0
        ? Math.max(0, nutritionRecipes.length - 3)
        : prevIndex - 3
    );
  };

  const containerVariants = {
    hidden: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 1.1 : 0.9,
    }),
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.3 },
        scale: { type: "spring", stiffness: 300, damping: 30 },
      },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction < 0 ? 1.1 : 0.9,
      transition: {
        opacity: { duration: 0.3 },
        scale: { type: "spring", stiffness: 300, damping: 30 },
      },
    }),
  };

  return (
    <section ref={ref} className="py-10 bg-[#E6F4FF] my-4 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-6xl text-[#d94f4f] font-bold text-center mb-4 relative inline-block">
            <span
              className="relative z-10"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Nutrition Delights
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 transform -skew-x-12"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover healthy recipes that nourish your body and excite your
            taste buds.
          </p>
        </motion.div>

        {/* Featured Recipes */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Featured Recipes
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={prevRecipes}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                aria-label="Previous recipes"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextRecipes}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                aria-label="Next recipes"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="overflow-hidden" style={{ height: '500px' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                style={{ minHeight: '500px' }}
              >
                {nutritionRecipes.slice(currentIndex, currentIndex + 3).map((recipe, index) => (
                  <NutritionRecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Explore All Recipes Button */}
        <div className="mt-12 text-center">
          <Link
            to="/nutrition"
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Explore All Recipes
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
});

export default NutritionRecipes;