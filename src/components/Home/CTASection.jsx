import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CreateRecipesCTA = () => {
  return (
    <section className="pt-20 pb-24 px-6 bg-gradient-to-r from-[#D3EAFB] via-blue-100 to-orange-50 rounded-3xl -z-30 my-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Start Creating Your Own Recipes!
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Unleash your culinary creativity and share your unique flavors with the world!
          </p>
          <Link
            to="/create-recipe"
            className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors duration-300 inline-block"
          >
            Create a Recipe
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CreateRecipesCTA;