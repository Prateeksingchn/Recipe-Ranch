import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="pt-20 pb-24 px-6 bg-green-100 rounded-t-3xl -z-30">
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
  );
};

export default CTASection;