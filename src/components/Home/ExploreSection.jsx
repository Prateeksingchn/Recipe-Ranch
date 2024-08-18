import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ExploreSection = () => {
  const mealTypes = [
    {
      name: "Breakfast",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWtmYXN0fGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      name: "Lunch",
      image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVuY2gnfGVufDB8fDB8fHww",
    },
    {
      name: "Dinner",
      image: "https://plus.unsplash.com/premium_photo-1694506374740-24176e5222e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmVyJTIwaW5kaWFufGVufDB8MHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <motion.section
      className="py-20 px-6 bg-[#C2E1F8] rounded-3xl my-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-[#04039B] font-[Lobster] mb-12 text-start">
          Explore Our Culinary World
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mealTypes.map((mealType, index) => (
            <motion.div
              key={mealType.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <img
                src={mealType.image}
                alt={mealType.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {mealType.name} Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover mouthwatering {mealType.name.toLowerCase()} ideas for
                  every day.
                </p>
                <button
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
                >
                  Explore Recipes <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExploreSection;