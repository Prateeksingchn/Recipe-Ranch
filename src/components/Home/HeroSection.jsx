import React from "react";
import { motion } from "framer-motion";


const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="min-h-[calc(93.5vh-4rem)] flex items-center justify-center bg-[#EE4130] text-white rounded-b-3xl pb-5 mb-4">
      <motion.div
        className="container mx-auto px-4 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto space-y-4 text-start -mt-5 ">
          <motion.h1
            className="text-5xl lg:text-[9rem] lg:leading-[8.3rem] tracking-wide font-black font-[Bungee] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover <br />Delicious<br />Recipes
          </motion.h1>
          <motion.div
            className="flex items-center justify-start ml-2 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-28 h-1 bg-yellow-400 mr-2"></div>
            <span className="text-4xl">😋</span>
            <div className="w-28 h-1 bg-yellow-400 ml-2"></div>
          </motion.div>
          <motion.div
            className="flex justify-start space-x-4 ml-4 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="bg-white text-red-500 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold">
              Get Started
            </button>
            <button className="bg-transparent text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-red-500 transition-colors font-semibold">
              Explore Recipes
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;