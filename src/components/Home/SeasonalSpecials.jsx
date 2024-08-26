import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const SeasonalSpecials = () => {
  const currentSeason = "Rainy Season";
  
  const seasonalIngredients = [
    { name: "Green Chilies", icon: "🌶️" },
    { name: "Corn", icon: "🌽" },
    { name: "Spinach", icon: "🍃" },
    { name: "Mushrooms", icon: "🍄" },
    { name: "Ginger", icon: "🥢" },
    { name: "Lemongrass", icon: "🌿" },
    { name: "Okra", icon: "🥬" },
    { name: "Eggplant", icon: "🍆" },
  ];

  const featuredRecipes = [
    {
      name: "Spicy Corn Pakoras",
      image: "Spicy Corn Pakoras.jpg",
      chef: "Chef Priya",
      prepTime: "25 mins",
      slug: "spicy-corn-pakoras"
    },
    {
      name: "Mushroom Hot & Sour Soup",
      image: "Mushroom Hot & Sour Soup.jpg",
      chef: "Chef Raj",
      prepTime: "30 mins",
      slug: "mushroom-hot-sour-soup"
    },
    {
      name: "Onion Bhaji",
      image: "Onion Bhaji.jpg",
      chef: "Chef Anita",
      prepTime: "20 mins",
      slug: "onion-bhaji"
    },
    {
      name: "Spinach and Corn Curry",
      image: "Spinach and Corn Curry.jpg",
      chef: "Chef Vikram",
      prepTime: "35 mins",
      slug: "spinach-corn-curry"
    },
    {
      name: "Masala Chai with Pakoras",
      image: "Masala Chai with Pakoras.jpg",
      chef: "Chef Suresh",
      prepTime: "30 mins",
      slug: "masala-chai-pakoras"
    }
  ];
  
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [currentIngredientPage, setCurrentIngredientPage] = useState(0);

  const nextRecipe = () => {
    setCurrentRecipe((prev) => (prev + 1) % featuredRecipes.length);
  };

  const prevRecipe = () => {
    setCurrentRecipe((prev) => (prev - 1 + featuredRecipes.length) % featuredRecipes.length);
  };

  const nextIngredientPage = () => {
    setCurrentIngredientPage((prev) => (prev + 1) % 2);
  };

  const prevIngredientPage = () => {
    setCurrentIngredientPage((prev) => (prev - 1 + 2) % 2);
  };

  const currentIngredients = seasonalIngredients.slice(currentIngredientPage * 4, (currentIngredientPage + 1) * 4);

  return (
    <section className="py-10 bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 overflow-hidden relative my-4 rounded-[30px]">
      {/* Animated raindrops */}
      {[...Array(20)].map((_, i) => (
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
          <h2 className="text-5xl font-bold text-teal-700 mb-4">
            {currentSeason} Delights
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Embrace the monsoon with these comforting recipes and seasonal ingredients!
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
            <h3 className="text-2xl font-semibold text-teal-700 mb-5">Seasonal Ingredients</h3>
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
                    <span className="text-sm font-medium text-center">{ingredient.name}</span>
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
            <h3 className="text-2xl font-semibold text-teal-700 mb-1">Featured Monsoon Recipes</h3>
            <div className="relative h-64 mb-6 ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRecipe}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center"
                >
                  <img
                    src={featuredRecipes[currentRecipe].image}
                    alt={featuredRecipes[currentRecipe].name}
                    className="w-[250px] h-[225px] object-cover rounded-lg mr-8"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold mb-1">{featuredRecipes[currentRecipe].name}</h4>
                    <p className="text-sm text-gray-600 mb-1">by {featuredRecipes[currentRecipe].chef}</p>
                    <p className="text-sm text-gray-600 mb-3">Prep time: {featuredRecipes[currentRecipe].prepTime}</p>
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

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            to="/seasonal-specials"
            className="inline-flex items-center bg-teal-500 text-white py-3 px-10 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Discover More Seasonal Delights
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SeasonalSpecials;