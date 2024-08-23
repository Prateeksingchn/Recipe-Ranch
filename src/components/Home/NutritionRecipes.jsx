import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { Leaf, Clock, ChefHat, Award, Search } from "lucide-react";
import { Link } from "react-router-dom";
import nutritionRecipes from "../../data/nutritionRecipes";

// Updated recipe template
const recipeTemplate = {
  id: "",
  title: "",
  chef: "",
  image: "",
  calories: 0,
  time: 0,
  dietType: "",
  mealCategory: "", // New field
  difficulty: "", // New field
  ingredients: [],
  instructions: [],
  nutritionFacts: {
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
  },
  rating: 0, // New field
};



const NutritionRecipeCard = ({ recipe, index }) => (
  <Link to={`/nutrition-recipe/${recipe.id}`} className="block">
    <motion.div
      className="relative overflow-hidden rounded-[30px] shadow-lg w-full h-[400px] group"
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = nutritionRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || recipe.mealCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Only take the first 4 recipes
  const displayedRecipes = filteredRecipes.slice(0, 4);

  const categories = ["All", ...new Set(nutritionRecipes.map(recipe => recipe.mealCategory))];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-[#c6c3c3] to-[#f8f4f4] rounded-3xl my-5">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-20 text-[#e64545] relative inline-block left-1/2 transform -translate-x-1/2">
          <span
            className="relative z-10"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Nutritious Delights
          </span>
          <span className="absolute bottom-0 left-0 w-full h-4 bg-orange-400 transform -skew-x-12"></span>
        </h2>

        {/* Search and category filters */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full p-2 pl-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Nutrition Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedRecipes.map((recipe, index) => (
            <NutritionRecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          {/* <p className="text-gray-600 mb-4">
            Showing {displayedRecipes.length} out of {filteredRecipes.length} recipes
          </p> */}
          <Link
            to="/nutrition"
            className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Explore More Recipes
          </Link>
        </div>
      </div>
    </section>
  );
});

export default NutritionRecipes;