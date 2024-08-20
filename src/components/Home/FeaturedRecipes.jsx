import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Award, ChefHat, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";


const featuredRecipes = [
  {
    id: 1,
    name: "Avocado Toast",
    category: "Breakfast",
    time: "10 min",
    difficulty: "Easy",
    chef: "Jamie Oliver",
    likes: 1200,
    image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Chicken Stir Fry",
    category: "Dinner",
    time: "25 min",
    difficulty: "Medium",
    chef: "Gordon Ramsay",
    likes: 1500,
    image: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Berry Smoothie Bowl",
    category: "Breakfast",
    time: "15 min",
    difficulty: "Easy",
    chef: "Nigella Lawson",
    likes: 980,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Spinach and Feta Quiche",
    category: "Lunch",
    time: "45 min",
    difficulty: "Medium",
    chef: "Julia Child",
    likes: 750,
    image: "https://images.pexels.com/photos/22856238/pexels-photo-22856238/free-photo-of-delicious-pancakes-with-spinach-tomatoes-and-mozzarella.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const RecipeCard = ({ recipe, index }) => (
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
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {recipe.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span className="flex items-center">
          <Clock size={16} className="mr-1" /> {recipe.time}
        </span>
        <span className="flex items-center">
          <Award size={16} className="mr-1" /> {recipe.difficulty}
        </span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="flex items-center text-gray-600">
          <ChefHat size={16} className="mr-1" /> {recipe.chef}
        </span>
        <span className="flex items-center text-red-500">
          <Heart size={16} className="mr-1" fill="currentColor" />{" "}
          {recipe.likes}
        </span>
      </div>
    </div>
  </motion.div>
);

const FeaturedRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(featuredRecipes);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = featuredRecipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(term) ||
        recipe.category.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <motion.section
      className="py-10 px-6 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-[#5a6167] mb-8 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Featured Recipes
        </h2>
        <div className="mb-8 flex justify-center">
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
        </div>
        <AnimatePresence>
          {filteredRecipes.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-white text-xl mt-8"
            >
              No recipes found. Try a different search term.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              layout
            >
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-12 text-center">
          <Link to="/recipes">
            <button className="bg-white text-green-500 hover:bg-green-100 transition-colors duration-300 px-6 py-2 rounded-full font-semibold">
              View All Recipes
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedRecipes;
