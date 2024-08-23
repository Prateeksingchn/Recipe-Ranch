import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Clock, Flame, ChefHat, ArrowLeft } from "lucide-react";

// Assume we have this array of recipes from your data source
import nutritionRecipes from "@/data/nutritionRecipes";

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Pre-Workout",
  "Post-Workout",
  "Snack",
];
const dietTypes = [
  "All",
  "Vegan",
  "Vegetarian",
  "Keto",
  "Low-Carb",
  "High-Protein",
  "Gluten-Free",
];

const NutritionRecipeCard = ({ recipe }) => (
  <Link to={`/nutrition-recipe/${recipe.id}`} className="block">
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="relative">
        <img
          src={`/${recipe.image}`}
          alt={recipe.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-green-600">
          {recipe.dietType}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {recipe.title}
        </h3>
        <p className="text-gray-600 mb-3">{recipe.mealCategory}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="flex items-center">
            <Clock size={16} className="mr-1" /> {recipe.time} mins
          </span>
          <span className="flex items-center">
            <Flame size={16} className="mr-1" /> {recipe.calories} cal
          </span>
        </div>
        <span className="flex items-center text-sm mt-1 text-gray-500">
          <ChefHat size={16} className="mr-1" /> {recipe.chef}
        </span>
      </div>
    </motion.div>
  </Link>
);

const Nutrition = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDietType, setSelectedDietType] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredRecipes = nutritionRecipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || recipe.mealCategory === selectedCategory;
    const matchesDietType =
      selectedDietType === "All" || recipe.dietType === selectedDietType;
    return matchesSearch && matchesCategory && matchesDietType;
  });

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-12 my-5 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link
            to="/#nutrition"
            className="mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </Link>
          <h1 className="text-5xl font-bold text-gray-800">
            Nutrition & Diet Recipes
          </h1>
        </div>


        {/* Search bar and filters */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/3 lg:w-[700px] ">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full p-4 pl-12 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="flex space-x-4 items-center">
            <Filter size={20} className="text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={selectedDietType}
              onChange={(e) => setSelectedDietType(e.target.value)}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-all duration-300"
            >
              {dietTypes.map((dietType) => (
                <option key={dietType} value={dietType}>
                  {dietType}
                </option>
              ))}
            </select>
          </div>
        </div>


        {/* Recipes grid */}
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredRecipes.map((recipe) => (
              <NutritionRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredRecipes.length === 0 && (
          <motion.p
            className="text-center text-gray-600 text-xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            No recipes found. Try adjusting your search or filters.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Nutrition;
