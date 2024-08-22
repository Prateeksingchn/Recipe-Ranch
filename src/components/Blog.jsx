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
      <div className="p-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[350px] object-cover rounded-2xl"
        />
        <div className="absolute top-6 left-6 bg-amber-500 text-white px-3 py-[4px] rounded-2xl text-sm font-semibold">
          {recipe.dishTypes[0] || "Recipe"}
        </div>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center text-gray-600 text-sm mb-3">
        <Clock className="w-4 h-4 mr-1" />
        <span className="mr-3">{recipe.readyInMinutes} min</span>
        <User className="w-4 h-4 mr-1" />
        <span>{recipe.servings} servings</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
        {recipe.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {recipe.summary.replace(/<[^>]*>/g, "")}
      </p>
      <div className="p-4 bg-green-50">
        <Link to={`/recipeblogdetail/${recipe.id}`}>
          <Button className="w-full flex items-center justify-center text-sm">
            View Recipe <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </motion.div>
);

// RecipeModal Component
const RecipeModal = ({ recipe, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-serif font-bold text-gray-800">
          {recipe.title}
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <Clock className="w-4 h-4 mr-1" />
        <span>{recipe.readyInMinutes} min</span>
        <User className="w-4 h-4 ml-4 mr-1" />
        <span>{recipe.servings} servings</span>
      </div>
      <div
        className="prose max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />
      <h3 className="text-xl font-serif font-semibold mt-6 mb-2">
        Ingredients:
      </h3>
      <ul className="list-disc pl-5 mb-4">
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient.original}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-serif font-semibold mb-2">Instructions:</h3>
      <ol className="list-decimal pl-5">
        {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
          <li key={index} className="text-gray-700 mb-2">
            {step.step}
          </li>
        ))}
      </ol>
    </motion.div>
  </motion.div>
);

// Main RecipeBlog Component
const RecipeBlog = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const resultsPerPage = 8;

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${resultsPerPage}&offset=${
          (currentPage - 1) * resultsPerPage
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
    <div className="bg-amber-50 min-h-screen py-10 my-4 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-extrabold text-amber-800 mb-4 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          The Recipe Chronicle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto font-serif"
          style={{ fontFamily: "Lobster, cursive" }}
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
            Loading recipes...
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
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={(selectedRecipe) =>
                    setSelectedRecipe(selectedRecipe)
                  }
                />
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

        <AnimatePresence>
          {selectedRecipe && (
            <RecipeModal
              recipe={selectedRecipe}
              onClose={() => setSelectedRecipe(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecipeBlog;
