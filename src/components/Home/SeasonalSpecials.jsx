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
    <section className="py-10 bg-gradient-to-b from-blue-100 via-cyan-100 to-green-200 overflow-hidden relative my-4 rounded-[30px]">
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl font-bold text-teal-700 mb-4"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            {currentSeason} Delights
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Embrace the monsoon with these comforting recipes and seasonal
            ingredients!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12 mx-10">
          {/* Seasonal Ingredients */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-80 px-8 py-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg relative"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-5">
              Seasonal Ingredients
            </h3>
            <div className="grid grid-cols-2 gap-4 h-52">
              <AnimatePresence mode="wait">
                {currentIngredients.map((ingredient, index) => (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center bg-teal-100 hover:bg-teal-200 hover:rounded-xl transition duration-300 pointer p-4 rounded-lg"
                  >
                    <span className="text-4xl mb-2">{ingredient.icon}</span>
                    <span className="text-sm font-medium text-center">
                      {ingredient.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevIngredientPage}
                className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextIngredientPage}
                className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* Featured Monsoon Recipes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-80 px-8 py-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg relative overflow-hidden"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-1">
              Featured Monsoon Recipes
            </h3>
            <div className="relative h-64 mb-6">
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
                  className="absolute inset-0 flex items-center"
                >
                  <img
                    src={featuredRecipes[currentRecipe].image}
                    alt={featuredRecipes[currentRecipe].name}
                    className="w-[250px] h-[225px] object-cover rounded-lg mr-8"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold mb-1">
                      {featuredRecipes[currentRecipe].name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      by {featuredRecipes[currentRecipe].chef}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      Prep time: {featuredRecipes[currentRecipe].prepTime}
                    </p>
                    <Link
                      to={`/seasonal-recipe/${featuredRecipes[currentRecipe].slug}`}
                      className="inline-flex items-center bg-teal-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors duration-300"
                    >
                      View Recipe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevRecipe}
                className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextRecipe}
                className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;
