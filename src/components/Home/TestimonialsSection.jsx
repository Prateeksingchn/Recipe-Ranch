import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../data/Testimonials";

const TestimonialsSection = () => {
  const MarqueeRow = ({ direction }) => (
    <div className="flex overflow-hidden py-4">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -2880] : [-2880, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-80 h-44 flex-shrink-0">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
            </div>
            <p className="text-gray-600 italic text-sm h-24 overflow-hidden text-wrap">"{testimonial.comment}"</p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-100 to-blue-50 my-4 rounded-3xl">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Culinary Voices
          </h2>
          <p className="text-xl text-gray-600 max-w-sm mx-auto">
            Discover the impact of our recipes through the words of our passionate community.
          </p>
        </motion.div>
        <div className="space-y-8 overflow-hidden">
          <MarqueeRow direction="left" />
          <MarqueeRow direction="right" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;