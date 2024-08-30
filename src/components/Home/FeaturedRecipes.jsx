import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Award, ChefHat, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipeCard = ({ recipe, index }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 1001));
  }, []);

  return (
    <motion.div
      key={recipe.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {recipe.category}
        </span>
      </div>
      <div className="px-5 pt-2 pb-4">
        <div className="flex items-start justify-between mt-1 mb-3 ">
          <div className="flex flex-col">
            <h3 className="text-[18px] font-semibold ">{recipe.title}</h3>
            <p className="text-gray-600 text-[15px] capitalize">
              {recipe.subcategory}
            </p>
          </div>
          <div className="flex flex-col justify-between items-start gap-[6px] text-sm text-gray-500 mt-1">
            <span className="flex items-center ">
              <Clock size={13} className="mr-1" /> {recipe.time} min
            </span>
            <span className="flex items-center">
              <Award size={16} className="mr-1" /> {recipe.difficulty}
            </span>     
          </div>
        </div>

        <div className="flex justify-between items-center text-sm mb-4">
          <span className="flex items-center text-gray-600">
            <ChefHat size={16} className="mr-1" /> {recipe.chefName}
          </span>
          <span className="flex items-center text-red-500 ">
            <Heart size={15} className="mr-1" fill="currentColor" /> {likes}
          </span>
        </div>
        <Link to={`/created-recipes/${recipe.id}`}>
          <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
            View Recipe
          </button>
        </Link>
      </div>
      </motion.div>
  );
};

const FeaturedRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const createdRecipes = useSelector((state) => state.recipeReducer.recipes);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // Sort recipes by creation date (newest first) and take the last 4
    const sortedRecipes = [...createdRecipes]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);
    setFilteredRecipes(sortedRecipes);
  }, [createdRecipes]);

  // const handleSearch = (e) => {
  //   const term = e.target.value.toLowerCase();
  //   setSearchTerm(term);
  //   const filtered = createdRecipes
  //     .filter(
  //       (recipe) =>
  //         recipe.title.toLowerCase().includes(term) ||
  //         recipe.category.toLowerCase().includes(term)
  //     )
  //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  //     .slice(0, 4);
  //   setFilteredRecipes(filtered);
  // };

  return (
    <motion.section
      className="py-10 px-6 bg-gradient-to-b from-green-100 via-cyan-100 to-blue-100 rounded-[30px] my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2
          className="text-6xl font-bold text-[#6495c1] mb-8 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Featured Recipes
        </h2>

        {/* Search bar */}
        {/* <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-[#5a6167] bg-white bg-opacity-20 text-[#5a6167] placeholder-[#5a6167] focus:outline-none"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5a6167]"
              size={20}
            />
          </div>
        </div> */}

        <AnimatePresence>
          {filteredRecipes.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-[#5a6167] text-xl mt-8"
            >
              No recipes found. Try a different search term.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              layout
            >
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-12 text-center">
          <Link to="/latest">
            <button className="bg-white text-green-500 hover:bg-green-100 transition-colors duration-300 px-6 py-2 rounded-full font-semibold">
              View All Our Latest Recipes
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedRecipes;