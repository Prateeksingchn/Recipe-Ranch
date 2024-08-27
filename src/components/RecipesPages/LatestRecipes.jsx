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

  useEffect(() => {
    window.scrollTo(0, 0);
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
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs uppercase font-bold py-1 px-3 rounded-full">
          {recipe.category}
        </span>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">
          {recipe.title}
        </h3>
        <h5 className="text-gray-600 mb-2 capitalize">{recipe.subcategory}</h5>
        <p className="text-gray-600 mb-4 text-sm">
          {recipe.description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Clock size={16} className="mr-1" /> {recipe.time} min
          </span>
          <span className="flex items-center">
            <Users size={16} className="mr-1" /> {recipe.servings} servings
          </span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Heart
              size={16}
              className="mr-1 text-red-500"
              fill="currentColor"
            />{" "}
            {likes}
          </span>
          <span className="flex items-center">
            <ChefHat size={16} className="mr-1 text-gray-700" />{" "}
            {recipe.chefName}
          </span>
        </div>
        <div className="mt-4">
          <Link to={`/created-recipes/${recipe.id}`}>
            <motion.button
              className="bg-blue-600 w-full text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-700"
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
      className="flex items-center justify-between mb-8"
    >
      <div className="flex items-center">
        <Link
          to="/"
          className="mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1
          className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-800 font-serif"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Latest Recipes
        </h1>
      </div>
      <Link to="/create-recipe">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center text-sm font-semibold">
          <Plus size={20} className="mr-2" />
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
      className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <div className="relative w-full sm:w-2/3">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-4 pl-12 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex-1 sm:flex-none flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm font-semibold"
      >
        <Filter size={20} className="mr-2" />
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
          className="mb-8 bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-4">Meal Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
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
    <div className="min-h-screen bg-gradient-to-b from-[#E6F4FF] via-cyan-200 to-pink-200 py-12 px-4 sm:px-6 lg:px-8 my-4 rounded-[30px] ">
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
              className="text-center text-xl text-gray-500 mt-8"
            >
              No recipes found. Try a different search term or filter.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
