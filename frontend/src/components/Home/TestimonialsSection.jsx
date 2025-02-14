import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../data/Testimonials";

const TestimonialsSection = () => {
  const MarqueeRow = ({ direction }) => (
    <div className="flex overflow-hidden py-2 sm:py-4">
      <motion.div
        className="flex space-x-3 sm:space-x-6 whitespace-nowrap"
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
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-3 sm:p-6 w-64 sm:w-80 h-36 sm:h-40 flex-shrink-0"
          >
            <div className="flex items-center mb-2 sm:mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-4 object-cover"
              />
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-gray-600 italic text-xs sm:text-sm h-20 sm:h-24 overflow-hidden text-wrap">
              "{testimonial.comment}"
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 bg-gradient-to-br from-green-200 to-blue-50 my-2 sm:my-4 rounded-[20px] sm:rounded-[30px]">
      <div className="w-full sm:w-[95%] mx-auto">
        <motion.div
          className="text-center mb-4 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 sm:mb-4"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Culinary Voices
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-sm mx-auto">
            Discover the impact of our recipes through the words of our
            passionate community.
          </p>
        </motion.div>
        <div className="space-y-2 sm:space-y-3 overflow-hidden">
          <MarqueeRow direction="left" />
          <MarqueeRow direction="right" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;