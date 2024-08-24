import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Pre-Workout",
  "Post-Workout",
  "Snack",
];
const dietTypes = [
  "All",
  "Vegan",
  "Vegetarian",
  "Keto",
  "Low-Carb",
  "High-Protein",
  "Gluten-Free",
];

const FilterPanel = ({
  isOpen,
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  selectedDietType,
  setSelectedDietType,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 bg-white p-6 rounded-xl shadow-md"
        >
          <div className="flex mb-4">
            <button
              className={`mr-4 px-4 py-2 rounded-md ${
                activeTab === "categories"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("categories")}
            >
              Meal Categories
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "dietTypes"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("dietTypes")}
            >
              Diet Types
            </button>
          </div>
          {activeTab === "categories" && (
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-green-500 text-white"
                      : "bg-white text-green-500 border border-green-500"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          {activeTab === "dietTypes" && (
            <div className="flex flex-wrap gap-2 mt-4">
              {dietTypes.map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full ${
                    selectedDietType === type
                      ? "bg-green-500 text-white"
                      : "bg-white text-green-500 border border-green-500"
                  }`}
                  onClick={() => setSelectedDietType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterPanel;