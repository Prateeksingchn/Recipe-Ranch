import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-[200px]  bg-[#EE4130] text-white rounded-b-3xl">
      <motion.div
        className="container mx-auto  gap-12 px-14 pr-72"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="lg:w-1/2 space-y-8 ">
          <motion.h1
            className="text-5xl lg:text-[16rem] lg:leading-[13rem] text-uppercase font-extrabold leading-tight w-full text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover <br />Delicious<br />Recipes
          </motion.h1>
          <motion.div
            className="flex items-center m-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-12 h-1 bg-yellow-400 mr-2"></div>
            <span className="text-3xl">😋</span>
            <div className="w-12 h-1 bg-yellow-400 ml-2"></div>
          </motion.div>
          {/* <motion.div
            className="flex items-center space-x-4 m-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex space-x-4">
              <button className="bg-white text-red-500 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors font-semibold">
                Get Started
              </button>
              <button className="bg-transparent text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-red-500 transition-colors font-semibold">
                Explore Menu
              </button>
            </div>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;