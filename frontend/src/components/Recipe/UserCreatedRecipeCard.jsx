import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat } from "lucide-react";

const UserCreatedRecipeCard = ({ recipe }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-52 w-full object-cover"
        />
        <div className="flex flex-wrap gap-2 mb-4 absolute top-2 left-3">
          {recipe.category && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {recipe.category}
            </span>
          )}
          {recipe.subcategory && (
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {recipe.subcategory}
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Clock size={16} className="mr-1" />
          <span className="mr-3">{recipe.time}</span>
          <Users size={16} className="mr-1" />
          <span>{recipe.servings} servings</span>
        </div>
        {/* <div className="flex items-center text-sm text-gray-600 mb-4">
          <ChefHat size={16} className="mr-1" />
          <span>{recipe.chefName}</span>
        </div> */}

        <Link to={`/created-recipes/${recipe.id}`}>
          <button className="bg-green-600 w-full text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out">
            View Recipe
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default UserCreatedRecipeCard;
