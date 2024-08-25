import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  ChefHat,
  Heart,
  Bookmark,
} from "lucide-react";

const RecipeCard = ({ recipe }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 1001));
  }, []);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300"
      whileHover={{ scale: 1 }}
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
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs capitalize font-semibold py-1 px-3 rounded-full">
          {recipe.category}
        </span>
      </div>
      <div className="px-5 pt-3 pb-3">
        <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
        <h5 className="text-gray-500 mb-2 capitalize">{recipe.subcategory}</h5>
        <p className="text-gray-600 mb-4 text-[16px] text-wrap">
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
              className="bg-[#04039B] w-full text-white font-bold py-2 px-4 rounded-full  "
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

const LatestRecipes = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(term) ||
        recipe.category.toLowerCase().includes(term) ||
        recipe.chefName.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <motion.div
      className="w-full mx-auto px-24 pt-6 pb-12  bg-gradient-to-b from-green-200 to-blue-200 my-4 rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between">
        <Link to="/">
          <button className="mt-4 mb-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go to Feature Section
          </button>
        </Link>
        <Link to="/recipes">
          <button className="mt-4 mb-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Go to Recipes
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>

      <h1
        className="text-5xl font-bold text-[#04039B] mb-12 text-center"
        style={{ fontFamily: "Lobster, cursive" }}
      >
        Latest Recipes
      </h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500 transition-colors duration-300"
        />
      </div>
      <AnimatePresence>
        {filteredRecipes.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-xl text-gray-500 mt-8"
          >
            No recipes found. Try a different search term.
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
    </motion.div>
  );
};

export default LatestRecipes;
