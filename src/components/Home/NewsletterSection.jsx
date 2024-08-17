import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;