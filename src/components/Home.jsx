import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ChevronRight, Clock, Award, Users } from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Culinary Delights | Home";
  }, []);

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
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main>
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-20">
          <motion.div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2 space-y-8">
              <motion.h1
                className="text-5xl lg:text-7xl font-extrabold text-green-600 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Discover Delicious Recipes
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Explore a world of flavors with our curated collection of simple
                and tasty recipes for every occasion.
              </motion.p>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="flex-grow py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <motion.button
                  className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search size={24} />
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src="/api/placeholder/600/400"
                alt="Delicious food spread"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </section>

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
              {["Breakfast", "Lunch", "Dinner"].map((mealType, index) => (
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
                      Explore Recipes{" "}
                      <ChevronRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-20 px-6 bg-green-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-green-600 mb-12 text-center">
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
                    <h3 className="text-xl font-semibold mb-2">
                      {recipe.name}
                    </h3>
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

        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-green-600 mb-4">
                Why Choose Our Recipes?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the benefits of cooking with our carefully curated
                recipes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy to Follow",
                  description:
                    "Step-by-step instructions for cooks of all levels.",
                  icon: "ri-list-check",
                },
                {
                  title: "Nutritious Options",
                  description: "Balanced meals to support your health goals.",
                  icon: "ri-heart-pulse-line",
                },
                {
                  title: "Time-Saving",
                  description: "Quick recipes for busy lifestyles.",
                  icon: "ri-time-line",
                },
                {
                  title: "Budget-Friendly",
                  description:
                    "Affordable ingredients without sacrificing flavor.",
                  icon: "ri-money-dollar-circle-line",
                },
                {
                  title: "Diverse Cuisines",
                  description: "Explore flavors from around the world.",
                  icon: "ri-earth-line",
                },
                {
                  title: "Seasonal Ingredients",
                  description: "Fresh, in-season produce for the best taste.",
                  icon: "ri-plant-line",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-green-50 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <i
                    className={`${feature.icon} text-4xl text-green-600 mb-4`}
                  ></i>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-green-600 text-white">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Stay Updated with New Recipes
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss a delicious recipe!
              </p>
            </motion.div>
            <motion.form
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-3 px-6 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-white text-green-600 py-3 px-8 rounded-full hover:bg-green-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-green-600 mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Read testimonials from our satisfied home chefs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah L.",
                  comment:
                    "These recipes have transformed my cooking! Easy to follow and always delicious.",
                  avatar: "/api/placeholder/100/100",
                },
                {
                  name: "Mike R.",
                  comment:
                    "I've discovered so many new flavors and techniques. Highly recommended!",
                  avatar: "/api/placeholder/100/100",
                },
                {
                  name: "Emily T.",
                  comment:
                    "As a busy mom, I appreciate the quick and nutritious meal ideas. Thank you!",
                  avatar: "/api/placeholder/100/100",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <h3 className="font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.comment}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-green-50">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-green-600 mb-4">
                Ready to Start Cooking?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Explore our recipes and start your culinary journey today!
              </p>
              <Link
                to="/recipes"
                className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-block"
              >
                Browse Recipes
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
