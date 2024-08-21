import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RecipeCard from "./Recipe/RecipeCard";
import RecipePageHeader from "./Recipe/RecipePageHeader";
import SearchBar from "./Recipe/SearchBar";
import UserCreatedRecipes from "./Recipe/UserCreatedRecipes";
import AllRecipes from "./Recipe/AllRecipes";
import Pagination from "./Recipe/Pagination";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(16);
  const [totalResults, setTotalResults] = useState(0);
  const [categories, setCategories] = useState([]);

  const userCreatedRecipes = useSelector(
    (state) => state.recipeReducer.recipes
  );

  useEffect(() => {
    fetchEdamamRecipes(currentPage, searchTerm, selectedCategory);
  }, [currentPage, searchTerm, selectedCategory]);

  const fetchEdamamRecipes = async (page, query, category) => {
    const APP_ID = "7b948bd8";
    const APP_KEY = "c1f4f91b2d5ffb2918347647551d908f";
    const from = (page - 1) * recipesPerPage;
    const to = from + recipesPerPage;
    let url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`;

    if (query) {
      url += `&q=${encodeURIComponent(query)}`;
    } else {
      url += "&q=chicken"; // Default search term if none provided
    }
    if (category) {
      url += `&cuisineType=${encodeURIComponent(category)}`;
    }

    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setAllRecipes(data.hits.map((hit) => hit.recipe));
      setTotalResults(data.count);

      // Extract unique categories
      const uniqueCategories = [
        ...new Set(data.hits.flatMap((hit) => hit.recipe.cuisineType || [])),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching recipes from Edamam:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const totalPages = Math.ceil(totalResults / recipesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-8 md:px-16 py-8 rounded-3xl my-4">
      <RecipePageHeader />
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        categories={categories}
      />
      <UserCreatedRecipes userCreatedRecipes={userCreatedRecipes} />
      <AllRecipes allRecipes={allRecipes} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Recipes;