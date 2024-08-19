import React from "react";
import { motion } from "framer-motion";

const DinnerRecipes = () => {
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
          Dinner Recipes
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our collection of dinner recipes here. (Placeholder content)
        </motion.p>
      </div>
    </motion.section>
  );
};

export default DinnerRecipes;