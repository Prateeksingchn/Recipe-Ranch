import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      comment:
        "These recipes have transformed my cooking! Easy to follow and always delicious.",
      avatar: "/api/placeholder/100/100",
    },
    {
      name: "Mike R.",
      comment:
        "I've discovered so many new flavors and techniques. Highly recommended!",
      avatar: "/api/placeholder/100/100",
    },
    {
      name: "Emily T.",
      comment:
        "As a busy mom, I appreciate the quick and nutritious meal ideas. Thank you!",
      avatar: "/api/placeholder/100/100",
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
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied home chefs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;