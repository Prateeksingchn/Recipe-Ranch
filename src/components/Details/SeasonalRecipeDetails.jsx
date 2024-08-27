import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Users,
  ChefHat,
  ArrowLeft,
  Thermometer,
  Droplets,
  Utensils,
  Leaf,
} from "lucide-react";
import { featuredRecipes } from "../../data/seasonalRecipes";

const RainDrop = ({ delay }) => (
  <motion.div
    className="absolute w-0.5 h-10 bg-blue-600 opacity-20 rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: -40,
    }}
    animate={{
      y: ["0vh", "100vh"],
    }}
    transition={{
      duration: 0.9 + Math.random() * 0.3,
      repeat: Infinity,
      ease: "linear",
      delay: delay,
    }}
  />
);

const SeasonalRecipeDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const recipe = featuredRecipes.find(recipe => recipe.slug === slug);
  const [activeTab, setActiveTab] = useState("ingredients");

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/#cta');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Recipe not found</h1>
        <button onClick={handleBackClick} className="inline-flex items-center text-teal-600 hover:text-teal-700 text-lg">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Seasonal Specials
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-50 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative my-4 rounded-[30px] ">
      {/* Rain effect */}
      {[...Array(50)].map((_, i) => (
        <RainDrop key={i} delay={i * 0.1} />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 text-lg font-medium transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Seasonal Specials
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-90 rounded-3xl shadow-xl shadow-neutral-400 overflow-hidden backdrop-blur-lg"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Image and Quick Info */}
            <div className="lg:w-2/5 p-8 bg-teal-50 bg-opacity-50">
              <div className="relative h-72 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h1 className="absolute bottom-4 left-4 right-4 text-3xl font-bold text-white leading-tight">
                  {recipe.name}
                </h1>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center text-gray-700">
                  <ChefHat className="w-5 h-5 mr-3 text-teal-600" />
                  <span className="font-medium">{recipe.chef}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-teal-600" />
                  <span className="font-medium">{recipe.prepTime}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-teal-600" />
                  <span className="font-medium">
                    {recipe.servings} servings
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section - Ingredients and Instructions */}
            <div className="lg:w-3/5 p-8">
              <div className="flex mb-6">
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`flex-1 py-2 px-4 text-center font-medium rounded-tl-lg rounded-bl-lg transition-colors duration-300 ${
                    activeTab === "ingredients"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab("instructions")}
                  className={`flex-1 py-2 px-4 text-center font-medium rounded-tr-lg rounded-br-lg transition-colors duration-300 ${
                    activeTab === "instructions"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Instructions
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "ingredients" && (
                  <motion.div
                    key="ingredients"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center bg-teal-50 rounded-lg p-3 text-sm shadow-sm"
                        >
                          <Leaf className="w-4 h-4 mr-2 text-teal-600" />
                          {ingredient}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "instructions" && (
                  <motion.div
                    key="instructions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ol className="space-y-4">
                      {recipe.instructions.map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start text-gray-700"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-sm">{step}</p>
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Section - Fun Seasonal Elements */}
          <div className="bg-teal-100 bg-opacity-50 p-8 rounded-b-3xl">
            <h3 className="text-xl font-semibold text-teal-700 mb-6">
              Seasonal Highlights
            </h3>
            <div className="flex flex-wrap justify-around gap-6">
              <motion.div
                className="flex items-center bg-white rounded-full px-5 py-3 shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Thermometer className="w-6 h-6 mr-3 text-teal-600" />
                <span className="text-sm font-medium">
                  Perfect for rainy days!
                </span>
              </motion.div>
              <motion.div
                className="flex items-center bg-white rounded-full px-5 py-3 shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Droplets className="w-6 h-6 mr-3 text-teal-600" />
                <span className="text-sm font-medium">
                  Monsoon special ingredients
                </span>
              </motion.div>
              <motion.div
                className="flex items-center bg-white rounded-full px-5 py-3 shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Utensils className="w-6 h-6 mr-3 text-teal-600" />
                <span className="text-sm font-medium">
                  Comfort food for the season
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SeasonalRecipeDetails;
