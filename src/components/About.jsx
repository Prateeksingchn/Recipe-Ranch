import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Users, Coffee, Book, Star, Clock } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, quote, rating }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-right font-semibold">- {name}</p>
  </motion.div>
);

const StatisticCard = ({ value, label, Icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md text-center"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-10 h-10 text-green-600 mb-2 mx-auto" />
    <h3 className="text-3xl font-bold text-gray-800 mb-1">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-green-300 min-h-screen py-16 mt-4 mb-12 rounded-3xl">
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

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-700 mb-8 text-center"
        >
          What Our Community Says
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <TestimonialCard
            name="Sarah L."
            quote="This website has transformed my cooking skills! The recipes are easy to follow and always delicious."
            rating={5}
          />
          <TestimonialCard
            name="Mike R."
            quote="I love the community aspect. Sharing recipes and tips with other food enthusiasts is so fun and inspiring."
            rating={4}
          />
          <TestimonialCard
            name="Emily T."
            quote="The variety of cuisines available is impressive. I've tried dishes from around the world without leaving my kitchen!"
            rating={5}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-700 mb-8 text-center"
        >
          Our Impact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <StatisticCard value="10,000+" label="Recipes" Icon={Book} />
          <StatisticCard value="1M+" label="Community Members" Icon={Users} />
          <StatisticCard value="5M+" label="Meals Cooked" Icon={Clock} />
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