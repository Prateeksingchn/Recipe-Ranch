import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nutritionRecipes from "@/data/nutritionRecipes";
import NutritionHeader from "../Nutrition/NutritionHeader";
import SearchAndFilterBar from "../Nutrition/SearchAndFilterBar";
import FilterPanel from "../Nutrition/FilterPanel";
import RecipeGrid from "../Nutrition/RecipeGrid";
import NutritionTip from "../Nutrition/NutritionTip";
import CreateNutritionRecipe from "../Nutrition/CreateNutritionRecipe";
import QuickAccessSection from "../Nutrition/QuickAccessSection";

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
    try {
      const storedRecipes = JSON.parse(localStorage.getItem('userCreatedRecipes') || '[]');
      setUserCreatedRecipes(storedRecipes);
    } catch (error) {
      console.error('Error loading user-created recipes:', error);
      setUserCreatedRecipes([]);
    }
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...userCreatedRecipes, { ...newRecipe, id: Date.now().toString() }];
    setUserCreatedRecipes(updatedRecipes);
    // Save to local storage
    try {
      localStorage.setItem('userCreatedRecipes', JSON.stringify(updatedRecipes));
    } catch (error) {
      console.error('Error saving user-created recipes:', error);
    }
  };

  const handleDeleteUserRecipe = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const updatedRecipes = userCreatedRecipes.filter(recipe => recipe.id !== id);
      setUserCreatedRecipes(updatedRecipes);
      // Save to local storage
      try {
        localStorage.setItem('userCreatedRecipes', JSON.stringify(updatedRecipes));
      } catch (error) {
        console.error('Error saving user-created recipes:', error);
      }
    }
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
    <div className="bg-gradient-to-b from-green-50 to-[#e0dbdb] min-h-screen py-12 px-4 sm:px-6 lg:px-8 my-4 rounded-3xl">
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

        <section id="all-recipes" className="mb-4">
          <RecipeGrid 
            recipes={filteredRecipes}
            userCreatedRecipes={[]}
            onDeleteUserRecipe={handleDeleteUserRecipe}
          />
        </section>

        <section id="created-recipes" className="mb-12">
          <RecipeGrid 
            recipes={[]}
            userCreatedRecipes={filteredUserCreatedRecipes}
            onDeleteUserRecipe={handleDeleteUserRecipe}
          />
        </section>

        <NutritionTip showTipAlert={showTipAlert} setShowTipAlert={setShowTipAlert} />

        {showCreateForm && (
          <CreateNutritionRecipe
            onAddRecipe={handleAddRecipe}
            onClose={() => setShowCreateForm(false)}
          />
        )}

        <QuickAccessSection />
      </div>
    </div>
  );
};

export default Nutrition;