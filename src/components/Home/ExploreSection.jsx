import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ExploreSection = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner"];

  return (
    <motion.section
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">
          Explore Our Culinary World
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mealTypes.map((mealType, index) => (
            <motion.div
              key={mealType}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <img
                src={`/api/placeholder/400/300`}
                alt={mealType}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {mealType} Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover mouthwatering {mealType.toLowerCase()} ideas for
                  every day.
                </p>
                <Link
                  to={`/recipes/${mealType.toLowerCase()}`}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
                >
                  Explore Recipes <ChevronRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExploreSection;