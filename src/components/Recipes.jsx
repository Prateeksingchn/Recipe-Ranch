import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./Recipe/RecipeCard";
import RecipePageHeader from "./Recipe/RecipePageHeader";
import SearchBar from "./Recipe/SearchBar";
import UserCreatedRecipes from "./Recipe/UserCreatedRecipes";
import AllRecipes from "./Recipe/AllRecipes";
import Pagination from "./Recipe/Pagination";
import NutritionRecipes from "./Recipe/NutritionRecipesSection"; // Import the new component

const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(16);
  const [totalResults, setTotalResults] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");

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
    <div className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-4 py-8 rounded-3xl my-4">
      <RecipePageHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full h-auto ">
        <UserCreatedRecipes userCreatedRecipes={userCreatedRecipes} />
        <NutritionRecipes nutritionRecipes={nutritionRecipes} />
      </div>

      <SearchBar
        categories={categories}
        setAllRecipes={setAllRecipes}
        setTotalResults={setTotalResults}
        onSearch={handleSearch}
      />
      <AllRecipes allRecipes={allRecipes} isLoading={isLoading} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Recipes;