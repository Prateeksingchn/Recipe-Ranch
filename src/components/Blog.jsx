import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Clock,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

// API Key (replace with your actual Spoonacular API key)
const API_KEY = "52355b06aa4549bfa510d9b4f808b77a";

// Styled Components
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-amber-600 text-white py-2 px-4 rounded-full hover:bg-amber-700 transition duration-300 ease-in-out ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 ${className}`}
    {...props}
  />
);

// RecipeCard Component
const RecipeCard = ({ recipe, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
        {recipe.dishTypes[0] || "Recipe"}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
        {recipe.title}
      </h3>
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <Clock className="w-4 h-4 mr-1" />
        <span className="mr-3">{recipe.readyInMinutes} min</span>
        <User className="w-4 h-4 mr-1" />
        <span>{recipe.servings} servings</span>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {recipe.summary.replace(/<[^>]*>/g, "")}
      </p>
      <Link to={`/recipeblogdetail/${recipe.id}`}>
        <Button className="w-full flex items-center justify-center text-sm">
          Read More <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

// Main RecipeBlog Component
const RecipeBlog = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const resultsPerPage = 9;

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);

    const randomOffset = Math.floor(Math.random() * 100); // Random offset for different results on reload

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${resultsPerPage}&offset=${
          (currentPage - 1) * resultsPerPage + randomOffset
        }&addRecipeInformation=true&query=${searchTerm}`
      );

      if (!response.ok) {
        if (response.status === 402) {
          setApiLimitReached(true);
          throw new Error("API limit reached. Please try again later.");
        }
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      setRecipes(data.results);
      setTotalResults(data.totalResults);
      setApiLimitReached(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchRecipes();
  };

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <div className="bg-gray-100 min-h-screen rounded-[30px] my-2 ">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif font-bold text-[#36465d] mb-4 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          The Recipe Chronicle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          Discover culinary treasures from around the world
        </motion.p>

        <form onSubmit={handleSearch} className="mb-12 flex justify-center">
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="flex items-center px-6">
              <Search className="h-5 w-5 mr-2" /> Search
            </Button>
          </div>
        </form>

        {isLoading && (
          <div className="text-center text-gray-600 font-bold mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="loader"
            >
              Loading recipes...
            </motion.div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 font-bold mb-4">{error}</div>
        )}

        {apiLimitReached && (
          <div className="text-center text-red-500 font-bold mb-4">
            API limit reached! Please try again later.
          </div>
        )}

        <AnimatePresence>
          {recipes.length > 0 ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </motion.div>
          ) : (
            !isLoading &&
            !error && (
              <div className="text-center text-gray-600 font-bold mb-4">
                No recipes found. Try a different search term.
              </div>
            )
          )}
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center"
            >
              <ChevronLeft className="h-5 w-5 mr-2" /> Previous
            </Button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center"
            >
              Next <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeBlog;