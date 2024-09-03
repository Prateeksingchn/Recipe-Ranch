import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import RecipeCard from "./Recipe/RecipeCard";
import RecipePageHeader from "./Recipe/RecipePageHeader";
import SearchBar from "./Recipe/SearchBar";
import UserCreatedRecipes from "./Recipe/UserCreatedRecipes";
import AllRecipes from "./Recipe/AllRecipes";
import Pagination from "./Recipe/Pagination";
import NutritionRecipes from "./Recipe/NutritionRecipesSection";
import { Book, Utensils } from 'lucide-react';

const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(16);
  const [totalResults, setTotalResults] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("latest");

  const userCreatedRecipes = useSelector(
    (state) => state.recipeReducer.recipes
  );

  const nutritionRecipes = JSON.parse(
    localStorage.getItem("userCreatedRecipes") || "[]"
  );

  useEffect(() => {
    fetchRecipes(currentPage, currentSearchTerm);
  }, [currentPage, currentSearchTerm]);

  const fetchRecipes = async (page, searchTerm) => {
    const APP_ID = "7b948bd8";
    const APP_KEY = "c1f4f91b2d5ffb2918347647551d908f";
    const from = (page - 1) * recipesPerPage;
    const to = from + recipesPerPage;
    const defaultSearchTerms = [
      "vegetarian",
      "chicken",
      "pasta",
      "salad",
      "soup",
      "dessert",
      "breakfast",
      "lunch",
      "dinner",
      "snack",
    ];

    // Use a default search term if no search term is provided
    const query =
      searchTerm ||
      defaultSearchTerms[Math.floor(Math.random() * defaultSearchTerms.length)];

    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}&q=${encodeURIComponent(
      query
    )}`;

    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setAllRecipes(data.hits.map((hit) => hit.recipe));
      setTotalResults(data.count);
      const uniqueCategories = [
        ...new Set(data.hits.flatMap((hit) => hit.recipe.cuisineType || [])),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleSearch = (searchTerm) => {
    setCurrentSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const totalPages = Math.min(Math.ceil(totalResults / recipesPerPage), 100);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 min-h-screen">
      <RecipePageHeader />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
            <TabButton
              active={activeTab === "latest"}
              onClick={() => setActiveTab("latest")}
              icon={<Book className="mr-2 h-5 w-5" />}
              text="Latest Recipes"
            />
            <TabButton
              active={activeTab === "nutrition"}
              onClick={() => setActiveTab("nutrition")}
              icon={<Utensils className="mr-2 h-5 w-5" />}
              text="Nutrition Recipes"
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-cyan-300 rounded-3xl shadow-xl p-4 sm:p-8 md:p-4 lg:p-6 overflow-hidden transition-all duration-300"
            >
              {activeTab === "latest" ? (
                <UserCreatedRecipes userCreatedRecipes={userCreatedRecipes} />
              ) : (
                <NutritionRecipes nutritionRecipes={nutritionRecipes} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <SearchBar
          categories={categories}
          setAllRecipes={setAllRecipes}
          setTotalResults={setTotalResults}
          onSearch={handleSearch}
        />

        <AllRecipes allRecipes={allRecipes} isLoading={isLoading} />
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
        : "bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </motion.button>
);

export default Recipes;