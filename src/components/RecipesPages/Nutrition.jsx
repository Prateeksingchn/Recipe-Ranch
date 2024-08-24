import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nutritionRecipes from "@/data/nutritionRecipes";
import NutritionHeader from "../Nutrition/NutritionHeader";
import SearchAndFilterBar from "../Nutrition/SearchAndFilterBar";
import FilterPanel from "../Nutrition/FilterPanel";
import RecipeGrid from "../Nutrition/RecipeGrid";
import NutritionTip from "../Nutrition/NutritionTip";
import CreateNutritionRecipe from "../Nutrition/CreateNutritionRecipe";

const Nutrition = () => {
  const [recipes, setRecipes] = useState(nutritionRecipes);
  const [userCreatedRecipes, setUserCreatedRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDietType, setSelectedDietType] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showTipAlert, setShowTipAlert] = useState(true);
  const [activeTab, setActiveTab] = useState("categories");
  const [sortBy, setSortBy] = useState("rating");
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load user-created recipes from local storage
    const storedRecipes = localStorage.getItem('userCreatedRecipes');
    if (storedRecipes) {
      setUserCreatedRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...userCreatedRecipes, newRecipe];
    setUserCreatedRecipes(updatedRecipes);
    // Save to local storage
    localStorage.setItem('userCreatedRecipes', JSON.stringify(updatedRecipes));
  };

  const filterRecipes = (recipeList) => {
    return recipeList
      .filter((recipe) => {
        const matchesSearch = recipe.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" || recipe.mealCategory === selectedCategory;
        const matchesDietType =
          selectedDietType === "All" || recipe.dietType === selectedDietType;
        return matchesSearch && matchesCategory && matchesDietType;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "time") return a.time - b.time;
        if (sortBy === "calories") return a.calories - b.calories;
        return 0;
      });
  };

  const filteredRecipes = filterRecipes(recipes);
  const filteredUserCreatedRecipes = filterRecipes(userCreatedRecipes);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <NutritionHeader onAddRecipe={() => setShowCreateForm(true)} />

        <SearchAndFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <FilterPanel
          isOpen={isFilterOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDietType={selectedDietType}
          setSelectedDietType={setSelectedDietType}
        />

        <RecipeGrid 
          recipes={filteredRecipes}
          userCreatedRecipes={filteredUserCreatedRecipes}
        />

        <NutritionTip showTipAlert={showTipAlert} setShowTipAlert={setShowTipAlert} />

        {showCreateForm && (
          <CreateNutritionRecipe
            onAddRecipe={handleAddRecipe}
            onClose={() => setShowCreateForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Nutrition;