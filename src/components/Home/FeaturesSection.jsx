import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Easy to Follow",
      description: "Step-by-step instructions for cooks of all levels.",
      icon: "ri-list-check",
    },
    {
      title: "Nutritious Options",
      description: "Balanced meals to support your health goals.",
      icon: "ri-heart-pulse-line",
    },
    {
      title: "Time-Saving",
      description: "Quick recipes for busy lifestyles.",
      icon: "ri-time-line",
    },
    {
      title: "Budget-Friendly",
      description: "Affordable ingredients without sacrificing flavor.",
      icon: "ri-money-dollar-circle-line",
    },
    {
      title: "Diverse Cuisines",
      description: "Explore flavors from around the world.",
      icon: "ri-earth-line",
    },
    {
      title: "Seasonal Ingredients",
      description: "Fresh, in-season produce for the best taste.",
      icon: "ri-plant-line",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Why Choose Our Recipes?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of cooking with our carefully curated recipes.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-green-50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <i className={`${feature.icon} text-4xl text-green-600 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;