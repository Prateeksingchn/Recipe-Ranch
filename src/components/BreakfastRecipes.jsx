import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Users, Star } from "lucide-react";

const BreakfastRecipes = () => {
  const breakfastRecipes = [
    {
      name: "Avocado Toast with Poached Egg",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2FkbyUyMHRvYXN0fGVufDB8MHwwfHx8MA%3D%3D",
      time: "15 min",
      servings: 2,
      rating: 4.8,
    },
    {
      name: "Blueberry Pancakes",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5JTIwcGFuY2FrZXN8ZW58MHwwfDB8fHww",
      time: "20 min",
      servings: 4,
      rating: 4.5,
    },
    {
      name: "Greek Yogurt Parfait",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ndXJ0JTIwcGFyZmFpdHxlbnwwfDB8MHx8fDA%3D",
      time: "10 min",
      servings: 1,
      rating: 4.2,
    },
    {
      name: "Spinach and Mushroom Omelette",
      image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b21lbGV0dGV8ZW58MHwwfDB8fHww",
      time: "15 min",
      servings: 2,
      rating: 4.6,
    },
    {
      name: "Breakfast Burrito",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0JTIwYnVycml0b3xlbnwwfDB8MHx8fDA%3D",
      time: "25 min",
      servings: 2,
      rating: 4.7,
    },
    {
      name: "Acai Bowl",
      image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "15 min",
      servings: 1,
      rating: 4.4,
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl my-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.h1
          className="text-6xl font-bold text-[#04039B] mb-8 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Breakfast Recipes
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start your day right with these delicious and easy-to-make breakfast recipes. From quick and healthy options to indulgent weekend treats, we've got something for everyone!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakfastRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" /> {recipe.time}
                  </span>
                  <span className="flex items-center">
                    <Users size={16} className="mr-1" /> {recipe.servings} servings
                  </span>
                  <span className="flex items-center text-yellow-500">
                    <Star size={16} className="mr-1" fill="currentColor" /> {recipe.rating}
                  </span>
                </div>
                <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                  View Recipe <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BreakfastRecipes;