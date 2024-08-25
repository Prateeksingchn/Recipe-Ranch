import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <RecipePageHeader />

      <div className="max-w-8xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className={`flex items-center px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeTab === "latest"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("latest")}
            >
              <Book className="mr-2 h-5 w-5" />
              Latest Recipes
            </button>
            <button
              className={`flex items-center px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                activeTab === "nutrition"
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("nutrition")}
            >
              <Utensils className="mr-2 h-5 w-5" />
              Nutrition Recipes
            </button>
          </div>
          <div className="bg-blue-100 rounded-3xl shadow-lg p-6 overflow-hidden transition-all duration-300">
            {activeTab === "latest" ? (
              <UserCreatedRecipes userCreatedRecipes={userCreatedRecipes} />
            ) : (
              <NutritionRecipes nutritionRecipes={nutritionRecipes} />
            )}
          </div>
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

export default Recipes;