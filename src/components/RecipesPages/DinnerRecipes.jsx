import React from "react";
import { motion } from "framer-motion";
import {  ArrowLeft, ChevronRight, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const DinnerRecipes = () => {
  const dinnerRecipes = [
    {
      name: "Grilled Salmon with Quinoa",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60",
      time: "30 min",
      servings: 2,
      rating: 4.7,
    },
    {
      name: "Spaghetti Carbonara",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: "25 min",
      servings: 4,
      rating: 4.8,
    },
    {
      name: "Roasted Chicken with Vegetables",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60",
      time: "1 hr",
      servings: 4,
      rating: 4.9,
    },
    {
      name: "Chicken Fry",
      image: "https://plus.unsplash.com/premium_photo-1683139918895-06f8f3b9939e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMCUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
      time: "20 min",
      servings: 3,
      rating: 4.6,
    },
    {
      name: "Vegetarian Tacos",
      image: "https://images.unsplash.com/photo-1613591797545-3ff9eba2ac34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZXRhcmlhbiUyMFRhY29zfGVufDB8fDB8fHww",
      time: "25 min",
      servings: 4,
      rating: 4.5,
    },
    {
      name: "Seafood Paella",
      image: "https://images.unsplash.com/photo-1623961990059-28356e226a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VhZm9vZCUyMFBhZWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      time: "45 min",
      servings: 5,
      rating: 4.8,
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-gradient-to-br from-[#C2E1F8] to-[#E6F4FF] rounded-3xl my-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/">
        <button
          className="mt-8 mb-8 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Explore
        </button>
      </Link>

      <div className="container mx-auto">
        <motion.h1
          className="text-6xl font-bold text-[#04039B] mb-8 text-center"
          style={{ fontFamily: "Lobster, cursive" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dinner Recipes
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          End your day with these tasty and satisfying dinner recipes. From light and healthy options to hearty meals, you'll find the perfect dish to suit your evening.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dinnerRecipes.map((recipe, index) => (
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

export default DinnerRecipes;
