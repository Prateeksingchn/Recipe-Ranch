import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {
  currentSeason,
  seasonalIngredients,
  featuredRecipes,
} from "../../data/seasonalRecipes";

const SeasonalSpecials = () => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [currentIngredientPage, setCurrentIngredientPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextRecipe = () => {
    setDirection(1);
    setCurrentRecipe((prev) => (prev + 1) % featuredRecipes.length);
  };

  const prevRecipe = () => {
    setDirection(-1);
    setCurrentRecipe(
      (prev) => (prev - 1 + featuredRecipes.length) % featuredRecipes.length
    );
  };

  const nextIngredientPage = () => {
    setCurrentIngredientPage((prev) => (prev + 1) % 2);
  };

  const prevIngredientPage = () => {
    setCurrentIngredientPage((prev) => (prev - 1 + 2) % 2);
  };

  const currentIngredients = seasonalIngredients.slice(
    currentIngredientPage * 4,
    (currentIngredientPage + 1) * 4
  );

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-4 sm:py-6 lg:py-10 bg-gradient-to-b from-blue-100 via-cyan-100 to-green-200 overflow-hidden relative my-2 sm:my-4 rounded-[20px] sm:rounded-[30px]">
      {/* Animated raindrops */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-10 bg-blue-300 opacity-50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: -40,
          }}
          animate={{
            y: ["0%", "100vh"],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-2 sm:px-4  relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-6 lg:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-700 mb-2 sm:mb-4"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            {currentSeason} Delights
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-700 max-w-2xl mx-auto px-2 sm:px-4">
            Embrace the monsoon with these comforting recipes and seasonal
            ingredients!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-12 mx-1 sm:mx-20 md:mx-5 lg:mx-10">
          {/* Seasonal Ingredients */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-80 px-3 sm:px-4 lg:px-8 py-3 sm:py-4 md:py-2 lg:py-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg relative"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-700 mb-2 sm:mb-3 lg:mb-5">
              Seasonal Ingredients
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 h-36 sm:h-40 lg:h-52 mb-6 sm:mb-8 md:mb-0 lg:mb-0 ">
              <AnimatePresence mode="wait">
                {currentIngredients.map((ingredient, index) => (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center bg-teal-100 hover:bg-teal-200 hover:rounded-xl transition duration-300 cursor-pointer p-1 sm:p-2 md:p-4 lg:p-4 rounded-lg"
                  >
                    <span className="text-2xl sm:text-3xl lg:text-4xl mb-1 lg:mb-2">{ingredient.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-center">
                      {ingredient.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="absolute bottom-2 sm:bottom-2 lg:bottom-4 right-2 sm:right-2 lg:right-4 flex space-x-2">
              <button
                onClick={prevIngredientPage}
                className="bg-teal-500 text-white p-1 lg:p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextIngredientPage}
                className="bg-teal-500 text-white p-1 lg:p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
              </button>
            </div>
          </motion.div>

          {/* Featured Monsoon Recipes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-80 px-4 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg relative overflow-hidden"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-700 mb-1 sm:mb-2 lg:mb-3">
              Featured Monsoon Recipes
            </h3>
            <div className="relative h-[290px] sm:h-[250px] md:h-[200px] lg:h-[250px] mb-2 sm:mb-4 lg:mb-6">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentRecipe}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 flex flex-col sm:flex-row md:flex-row lg:flex-row items-start justify-start"
                >
                  <img
                    src={featuredRecipes[currentRecipe].image}
                    alt={featuredRecipes[currentRecipe].name}
                    className="w-[400px] sm:w-1/2 md:w-[52%] lg:w-[47%] h-[200px] sm:h-full md:h-[185px] lg:h-full object-cover rounded-lg mb-2 sm:mb-0 md:mb-0 lg:mb-0 mr-3 sm:mr-4 md:mr-4 lg:mr-4"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start sm:items-start sm:justify-start md:justify-center md:items-start lg:items-start lg:justify-center">
                    <h4 className="text-[15px] sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">
                      {featuredRecipes[currentRecipe].name}
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-1">
                      by {featuredRecipes[currentRecipe].chef}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-2 lg:mb-3">
                      Prep time: {featuredRecipes[currentRecipe].prepTime}
                    </p>
                    <Link
                      to={`/seasonal-recipe/${featuredRecipes[currentRecipe].slug}`}
                      className="inline-flex items-center bg-teal-500 text-white py-1 lg:py-2 px-2 lg:px-4 rounded-full text-xs lg:text-sm font-semibold hover:bg-teal-600 transition-colors duration-300"
                    >
                      View Recipe
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute bottom-2 sm:bottom-2 md:bottom-3 lg:bottom-4 right-2 sm:right-2 md:right-3 lg:right-4 flex space-x-2">
              <button
                onClick={prevRecipe}
                className="bg-teal-500 text-white p-1 lg:p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6" /> 
              </button>
              <button
                onClick={nextRecipe}
                className="bg-teal-500 text-white p-1 lg:p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;