import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="min-h-[calc(93.5vh-4rem)] flex items-center justify-center bg-[#EE4130] text-white rounded-b-[30px] pb-5 mb-4">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto space-y-4 text-start -mt-5">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[9rem] tracking-wide font-black font-[Bungee] leading-tight md:leading-[5rem] lg:leading-[8.3rem]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover <br />
            Delicious
            <br />
            Recipes
          </motion.h1>
          <motion.div
            className="flex items-center justify-start ml-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-16 sm:w-20 md:w-28 h-1 bg-yellow-400 mr-2"></div>
            <span className="text-2xl sm:text-3xl md:text-4xl">😋</span>
            <div className="w-16 sm:w-20 md:w-28 h-1 bg-yellow-400 ml-2"></div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 ml-4 mt-5 font-[Candal]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/create-recipe" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-red-500 px-6 py-2 pb-3 rounded-full hover:bg-yellow-400 transition-colors">
                Get Started
              </button>
            </Link>
            <Link to="/recipes" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent text-white px-6 py-2 pb-3 rounded-full border border-white hover:bg-white hover:text-red-500 transition-colors">
                Explore Recipes
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;