import React from "react";
import { motion } from "framer-motion";
import { Clock, Award } from "lucide-react";

const FeaturedRecipes = () => {
  const featuredRecipes = [
    {
      id: 1,
      name: "Avocado Toast",
      category: "Breakfast",
      time: "10 min",
      difficulty: "Easy",
    },
    {
      id: 2,
      name: "Chicken Stir Fry",
      category: "Dinner",
      time: "25 min",
      difficulty: "Medium",
    },
    {
      id: 3,
      name: "Berry Smoothie Bowl",
      category: "Breakfast",
      time: "15 min",
      difficulty: "Easy",
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-green-400 rounded-3xl my-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-[Lobster] font-bold text-[#5B320E] mb-12 text-start">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <img
                src={`/api/placeholder/400/300`}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                <p className="text-gray-600 mb-4">{recipe.category}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> {recipe.time}
                  </span>
                  <span className="flex items-center">
                    <Award size={16} className="mr-1" /> {recipe.difficulty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedRecipes;