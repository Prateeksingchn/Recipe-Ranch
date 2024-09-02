import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Users, Book, Clock, Leaf } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-green-400 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const StatisticCard = ({ value, label, Icon }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
    whileHover={{ y: -5, scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-10 h-10 text-green-400 mb-2 mx-auto" />
    <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
    <p className="text-gray-300">{label}</p>
  </motion.div>
);

const RecipeCategory = ({ name, image }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
    whileHover={{ y: -5, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
  </motion.div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8 text-center"
        >
          Savor Every Bite
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
        >
          Welcome to our culinary haven, where passion meets plate. Discover a world of flavors, techniques, and stories that will inspire your next kitchen adventure.
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
            description="Explore a rich tapestry of cuisines from around the world, suited for every skill level."
          />
          <FeatureCard
            Icon={Users}
            title="Community-Driven"
            description="Join a vibrant community of food lovers, sharing tips, tricks, and culinary triumphs."
          />
          <FeatureCard
            Icon={Leaf}
            title="Sustainable Cooking"
            description="Discover eco-friendly recipes and learn about sustainable ingredients and practices."
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Our Culinary Impact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <StatisticCard value="10,000+" label="Recipes" Icon={Book} />
          <StatisticCard value="1M+" label="Community Members" Icon={Users} />
          <StatisticCard value="5M+" label="Meals Cooked" Icon={Utensils} />
          <StatisticCard value="24/7" label="Cooking Inspiration" Icon={Clock} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Explore Our Categories
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <RecipeCategory
            name="Quick & Easy"
            image="/path-to-quick-easy-image.jpg"
          />
          <RecipeCategory
            name="Vegetarian Delights"
            image="/path-to-vegetarian-image.jpg"
          />
          <RecipeCategory
            name="Global Cuisines"
            image="/path-to-global-cuisines-image.jpg"
          />
        </motion.div>
        
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300 ease-in-out flex items-center justify-center mx-auto">
            Start Cooking
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;