import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf } from "lucide-react";

const NutritionTip = ({ showTipAlert, setShowTipAlert }) => {
  return (
    <AnimatePresence>
      {showTipAlert && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-lg shadow-md p-6 relative"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Nutrition Tip of the Day
          </h3>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => setShowTipAlert(false)}
          >
            <X size={20} />
          </button>
          <p className="text-gray-600 mb-4">
            Incorporating a variety of colorful fruits and vegetables in your
            diet ensures you get a wide range of essential nutrients and
            antioxidants.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Leaf className="mr-2" size={16} />
            <span>Boost your immune system</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NutritionTip;