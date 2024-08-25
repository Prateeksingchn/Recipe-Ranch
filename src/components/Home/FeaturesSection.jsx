import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, DollarSign, Globe, Heart, Leaf, ListChecks } from 'lucide-react';

const FeatureIcon = ({ Icon }) => (
  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
    <Icon className="text-orange-600" size={24} />
  </div>
);

const FeatureCard = ({ feature, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FeatureIcon Icon={feature.icon} />
            <h3 className="text-xl font-semibold ml-4 mb-4 text-gray-800">{feature.title}</h3>
          </div>
          <ChevronDown
            className={`text-orange-600 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 mt-4">{feature.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Easy to Follow",
      description: "Step-by-step instructions for cooks of all levels, making cooking a breeze.",
      icon: ListChecks,
    },
    {
      title: "Nutritious Options",
      description: "Balanced meals to support your health goals and nourish your body.",
      icon: Heart,
    },
    {
      title: "Time-Saving",
      description: "Quick recipes for busy lifestyles, without compromising on taste.",
      icon: Clock,
    },
    {
      title: "Budget-Friendly",
      description: "Affordable ingredients that don't sacrifice flavor or quality.",
      icon: DollarSign,
    },
    {
      title: "Diverse Cuisines",
      description: "Explore flavors from around the world, right in your kitchen.",
      icon: Globe,
    },
    {
      title: "Seasonal Ingredients",
      description: "Fresh, in-season produce for the best taste and environmental impact.",
      icon: Leaf,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-[30px] my-4">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-orange-600 mb-4">
            Discover Culinary Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elevate your cooking experience with our expertly crafted recipes.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;