import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Plus } from "lucide-react";

const NutritionHeader = ({ onAddRecipe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-8"
    >
      <div className="flex items-center">
        <Link
          to="/#nutrition"
          className="mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800"
          style={{ fontFamily: "Lobster, cursive" }}
        >
          Nutrition & Diet Recipes
        </h1>
      </div>
      <button
        onClick={onAddRecipe}
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center"
      >
        <Plus size={20} className="mr-2" />
        Add Recipe
      </button>
    </motion.div>
  );
};

export default NutritionHeader;
