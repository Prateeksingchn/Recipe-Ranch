import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf, ArrowRight } from "lucide-react";

const NutritionTip = ({ showTipAlert, setShowTipAlert }) => {
  return (
    <AnimatePresence>
      {showTipAlert && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-lg p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 transform rotate-45"></div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-300"
            onClick={() => setShowTipAlert(false)}
          >
            <X size={24} />
          </button>
          <h3 className="text-3xl font-bold mb-4 text-white">
            Nutrition Tip of the Day
          </h3>
          <p className="text-white text-opacity-90 mb-6 text-lg">
            Incorporate a rainbow of fruits and vegetables in your diet to
            ensure a wide range of essential nutrients and antioxidants.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-white text-opacity-90">
              <Leaf className="mr-2" size={20} />
              <span className="font-semibold">Boost your immune system</span>
            </div>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold flex items-center transition-colors duration-300 hover:bg-green-100"
            >
              Learn More
              <ArrowRight className="ml-2" size={18} />
            </motion.button> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NutritionTip;