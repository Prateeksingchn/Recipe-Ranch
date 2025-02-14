import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ArrowLeft,
  Plus,
  Search,
  Clock,
  Heart,
  ChefHat,
  Filter,
  Users,
} from "lucide-react";

const RecipeCard = ({ recipe }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 1001));
  }, []);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="relative">
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 sm:h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 text-white text-xs uppercase font-bold py-1 px-2 sm:px-3 rounded-full">
          {recipe.category}
        </span>
      </div>
      <div className="p-4 sm:px-6 sm:py-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
          {recipe.title}
        </h3>
        <h5 className="text-sm sm:text-base text-gray-600 mb-2 capitalize">{recipe.subcategory}</h5>
        <p className="text-gray-600 mb-4 text-xs sm:text-sm">
          {recipe.description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Clock size={14} className="mr-1" /> {recipe.time} min
          </span>
          <span className="flex items-center">
            <Users size={14} className="mr-1" /> {recipe.servings} servings
          </span>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Heart
              size={14}
              className="mr-1 text-red-500"
              fill="currentColor"
            />{" "}
            {likes}
          </span>
          <span className="flex items-center">
            <ChefHat size={14} className="mr-1 text-gray-700" />{" "}
            {recipe.chefName}
          </span>
        </div>
        <div className="mt-4">
          <Link to={`/created-recipes/${recipe.id}`}>
            <motion.button
              className="bg-blue-600 w-full text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-700 text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              View Recipe
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const LatestRecipeHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8"
    >
      <div className="flex items-center mb-4 sm:mb-0">
        <Link
          to="/"
          className="mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-serif"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Latest Recipes
        </h1>
      </div>
      <Link to="/create-recipe">
        <button className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center text-xs sm:text-sm font-semibold">
          <Plus size={16} className="mr-2" />
          Add Recipe
        </button>
      </Link>
    </motion.div>
  );
};

const SearchAndFilterBar = ({
  searchTerm,
  setSearchTerm,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <div className="relative w-full sm:w-2/3">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="w-full sm:w-auto flex items-center justify-center bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm font-semibold"
      >
        <Filter size={16} className="mr-2" />
        Filter
      </button>
    </motion.div>
  );
};

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snack"];

const FilterPanel = ({ isOpen, selectedCategory, setSelectedCategory }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-xl shadow-md"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Meal Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full transition-colors duration-300 text-xs sm:text-sm ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LatestRecipes = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, selectedCategory]);

  const filterRecipes = () => {
    let filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) =>
          recipe.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredRecipes(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F4FF] via-cyan-200 to-pink-200 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 rounded-[20px] sm:rounded-[30px] my-4">
      <div className="max-w-7xl mx-auto">
        <LatestRecipeHeader />
        <SearchAndFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
        <FilterPanel
          isOpen={isFilterOpen}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AnimatePresence>
          {filteredRecipes.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-lg sm:text-xl text-gray-500 mt-6 sm:mt-8"
            >
              No recipes found. Try a different search term or filter.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              layout
            >
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LatestRecipes;