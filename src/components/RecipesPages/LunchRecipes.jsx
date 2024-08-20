import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Users, Star } from "lucide-react";

const LunchRecipes = () => {
  const lunchRecipes = [
    {
      name: "Chicken Caesar Salad",
      image: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMENhZXNhciUyMFNhbGFkfGVufDB8fDB8fHww",
      time: "20 min",
      servings: 2,
      rating: 4.6,
    },
    {
      name: "Grilled Cheese Sandwich",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JpbGxlZCUyMENoZWVzZSUyMFNhbmR3aWNofGVufDB8fDB8fHww",
      time: "10 min",
      servings: 1,
      rating: 4.3,
    },
    {
      name: "Tomato Basil Soup",
      image: "https://images.unsplash.com/photo-1620418025834-f4379baf1de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VG9tYXRvJTIwQmFzaWwlMjBTb3VwfGVufDB8fDB8fHww",
      time: "30 min",
      servings: 4,
      rating: 4.7,
    },
    {
      name: "BLT Sandwich",
      image: "https://images.unsplash.com/photo-1705537238393-86337520ef8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QkxUJTIwU2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
      time: "15 min",
      servings: 1,
      rating: 4.5,
    },
    {
      name: "Quinoa Salad",
      image: "https://plus.unsplash.com/premium_photo-1704989937441-68b6536e6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UXVpbm9hJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D",
      time: "25 min",
      servings: 2,
      rating: 4.4,
    },
    {
      name: "Turkey Avocado Wrap",
      image: "https://plus.unsplash.com/premium_photo-1664478244517-513dc18af854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXZvY2FkbyUyMFdyYXB8ZW58MHx8MHx8fDA%3D",
      time: "15 min",
      servings: 1,
      rating: 4.6,
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl my-4"
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
          Lunch Recipes
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover delicious lunch recipes that are quick and easy to make, perfect for a mid-day meal.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lunchRecipes.map((recipe, index) => (
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

export default LunchRecipes;
