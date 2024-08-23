import React, { useState, forwardRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Clock,
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  ChefHat,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import nutritionRecipes from "../../data/nutritionRecipes";

const NutritionRecipeCard = ({ recipe, index }) => (
  <Link to={`/nutrition-recipe/${recipe.id}`} className="block">
    <motion.div
      className="relative overflow-hidden rounded-[30px] shadow-lg w-full h-[500px] group"
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDietFilter, setActiveDietFilter] = useState("All");
  const [activeMealFilter, setActiveMealFilter] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const filteredRecipes = nutritionRecipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeDietFilter === "All" || recipe.dietType === activeDietFilter) &&
      (activeMealFilter === "All" || recipe.mealCategory === activeMealFilter)
  );

  const nextRecipes = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= filteredRecipes.length ? 0 : prevIndex + 3
    );
  };

  const prevRecipes = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0
        ? Math.max(0, filteredRecipes.length - 3)
        : prevIndex - 3
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeDietFilter, activeMealFilter, searchTerm]);

  const containerVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const dietTypes = [
    "All",
    ...new Set(nutritionRecipes.map((recipe) => recipe.dietType)),
  ];
  const mealCategories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Dessert",
  ];

  return (
    <section ref={ref} className="py-16 bg-[#E6F4FF] my-4 rounded-3xl">
      <div className="container mx-auto px-4">
        {/* Nutrition Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl text-[#d94f4f] font-bold text-center mb-4 relative inline-block">
            <span
              className="relative z-10"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Nutrition Delights
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 transform -skew-x-12"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover healthy recipes that nourish your body and excite your
            taste buds.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full p-3 pl-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            <Filter size={20} className="mr-2" />
            Filter
          </button>
        </div>

        {/* Filter */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Diet Types:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dietTypes.map((type) => (
                      <button
                        key={type}
                        className={`px-4 py-2 rounded-full ${
                          activeDietFilter === type
                            ? "bg-green-500 text-white"
                            : "bg-white text-green-500 border border-green-500"
                        }`}
                        onClick={() => setActiveDietFilter(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Meal Categories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mealCategories.map((category) => (
                      <button
                        key={category}
                        className={`px-4 py-2 rounded-full ${
                          activeMealFilter === category
                            ? "bg-green-500 text-white"
                            : "bg-white text-green-500 border border-green-500"
                        }`}
                        onClick={() => setActiveMealFilter(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Recipes */}
        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Featured Recipes
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={prevRecipes}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                aria-label="Previous recipes"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextRecipes}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                aria-label="Next recipes"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="overflow-hidden" style={{ height: '500px' }}> {/* Fixed height container */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                style={{ minHeight: '500px' }} 
              >
                {filteredRecipes.slice(currentIndex, currentIndex + 3).map((recipe, index) => (
                  <NutritionRecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {filteredRecipes.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              No recipes found. Try adjusting your filters or search term.
            </p>
          )}
        </div>

        {/* Explore All Recipes Button */}
        <div className="mt-12 text-center">
          <Link
            to="/nutrition"
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Explore All Recipes
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>

        {/* Nutrition Tip of the Day */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-[#f5f5f5] rounded-2xl shadow-lg shadow-gray-300 p-8"
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Nutrition Tip of the Day
          </h3>
          <p className="text-gray-600 mb-4">
            Incorporating a variety of colorful fruits and vegetables in your
            diet ensures you get a wide range of essential nutrients and
            antioxidants.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Leaf className="mr-2" size={16} />
            <span>Boost your immune system</span>
            <Clock className="ml-4 mr-2" size={16} />
            <span>Quick tip</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default NutritionRecipes;
