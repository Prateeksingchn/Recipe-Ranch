import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

// API Key (replace with your actual Spoonacular API key)
const API_KEY = "52355b06aa4549bfa510d9b4f808b77a";

// Styled Components
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    {...props}
  />
);

// RecipeCard Component
const RecipeCard = ({ recipe }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <Card
      className="h-full flex flex-col cursor-pointer transform hover:scale-105 transition duration-300"
      onClick={() => onClick(recipe)}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          Ready in {recipe.readyInMinutes} minutes
        </p>
        <p className="text-sm text-gray-600">
          {recipe.summary.split(" ").slice(0, 15).join(" ")}...
        </p>
      </div>
      <div className="p-4 bg-green-50">
        <Link to={`/recipeblogdetail/${recipe.id}`}>
          <Button className="w-full flex items-center justify-center text-sm">
            View Recipe <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
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
        <h2 className="text-2xl font-bold text-gray-800">{recipe.title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">
        Ready in {recipe.readyInMinutes} minutes
      </p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />
      <h3 className="text-xl font-semibold mt-6 mb-2">Ingredients:</h3>
      <ul className="list-disc pl-5 mb-4">
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient.original}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
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
  const resultsPerPage = 9;

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${resultsPerPage}&offset=${
          (currentPage - 1) * resultsPerPage
        }&addRecipeInformation=true&query=${searchTerm}`
      );
      const data = await response.json();
      setRecipes(data.results);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Error fetching recipes:", error);
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
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen py-10 my-4 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-green-600 mb-4 text-center"
        >
          Culinary Delights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          Explore a world of flavors and discover your next favorite dish.
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

        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={(selectedRecipe) => setSelectedRecipe(selectedRecipe)}
              />
            ))}
          </motion.div>
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