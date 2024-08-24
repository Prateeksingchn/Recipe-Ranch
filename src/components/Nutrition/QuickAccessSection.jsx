import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, UserPlus, ChevronRight, UserCheck2, UserCircle, UserRound, UserRoundPen, ReceiptText } from 'lucide-react';

const QuickAccessSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ width: '60px' }}
      animate={{ width: isExpanded ? '240px' : '60px' }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      className="fixed right-8 bottom-8 transform -translate-y-1/2 bg-green-300 rounded-[30px] shadow-xl px-3 py-4 overflow-hidden"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg font-semibold mb-4 text-gray-800 whitespace-nowrap"
          >
            Quick Access
          </motion.h3>
        )}
      </AnimatePresence>
      <ul className="space-y-2">
        <QuickAccessItem
          icon={ReceiptText}
          text="All Recipes"
          onClick={() => handleClick('all-recipes')}
          isExpanded={isExpanded}
        />
        <QuickAccessItem
          icon={UserRoundPen}
          text="Created Recipes"
          onClick={() => handleClick('created-recipes')}
          isExpanded={isExpanded}
        />
      </ul>
    </motion.div>
  );
};

const QuickAccessItem = ({ icon: Icon, text, onClick, isExpanded }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <button
      onClick={onClick}
      className="flex items-center p-2 rounded-xl hover:bg-green-50 transition-colors duration-300 w-full text-left group"
    >
      <Icon className="text-green-600 flex-shrink-0 group-hover:text-green-700" size={20} />
      <AnimatePresence>
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="ml-3 text-gray-700 whitespace-nowrap"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="ml-auto"
          >
            <ChevronRight className="text-gray-400 group-hover:text-gray-600" size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  </motion.li>
);

export default QuickAccessSection;