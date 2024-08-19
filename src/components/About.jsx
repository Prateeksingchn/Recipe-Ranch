import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Users, Coffee } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-green-600 mb-8 text-center"
        >
          Discover Our Culinary World
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          We're passionate about bringing delicious recipes and cooking tips right to your fingertips. Join our community of food lovers and culinary enthusiasts!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <FeatureCard
            Icon={Utensils}
            title="Diverse Recipes"
            description="Explore a wide range of cuisines and dishes for every occasion."
          />
          <FeatureCard
            Icon={Users}
            title="Community"
            description="Connect with fellow food lovers and share your culinary experiences."
          />
          <FeatureCard
            Icon={Coffee}
            title="Tips & Tricks"
            description="Learn professional cooking techniques to elevate your skills."
          />
        </motion.div>
        
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center mx-auto">
            Join Our Culinary Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;