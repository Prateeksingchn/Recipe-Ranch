import React, { useState, useEffect } from 'react';
import { ChefHat, Coffee, Star, Award, Apple, MessageCircle, Gift, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickAccess = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [screenSize, setScreenSize] = useState('lg');
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else if (window.innerWidth < 768) {
        setScreenSize('md');
      } else if (window.innerWidth < 1024) {
        setScreenSize('lg');
      } else {
        setScreenSize('xl');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home', icon: ChefHat, color: 'bg-red-500' },
    { id: 'explore', label: 'Explore', icon: Coffee, color: 'bg-blue-500' },
    { id: 'featured', label: 'Featured', icon: Star, color: 'bg-yellow-500' },
    { id: 'top', label: 'Top Picks', icon: Award, color: 'bg-green-500' },
    { id: 'nutrition', label: 'Nutrition', icon: Apple, color: 'bg-purple-500' },
    { id: 'testimonials', label: 'Reviews', icon: MessageCircle, color: 'bg-pink-500' },
    { id: 'cta', label: 'Seasonal', icon: Gift, color: 'bg-indigo-500' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    if (screenSize === 'sm') {
      setIsPanelVisible(false);
    }
  };

  const togglePanel = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  const panelVariants = {
    hidden: { x: '100%', width: '3.5rem' },
    visible: { x: 0, width: '3.5rem' },
    expanded: { width: '140px' }
  };

  const QuickAccessPanel = () => (
    <motion.div
      className={`fixed z-[999] bg-white/80 backdrop-blur-md shadow-lg rounded-[30px] transition-all duration-300 ease-in-out
        ${screenSize === 'sm' 
          ? 'bottom-20 right-4' 
          : 'right-6 top-1/2 transform -translate-y-1/2'}
        ${isExpanded ? 'p-3' : 'p-2'}`}
      variants={panelVariants}
      initial={screenSize === 'sm' ? 'hidden' : 'visible'}
      animate={screenSize === 'sm' 
        ? (isPanelVisible ? (isExpanded ? 'expanded' : 'visible') : 'hidden')
        : (isExpanded ? 'expanded' : 'visible')}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className={`space-y-2 ml-1 ${isExpanded ? 'px-0' : 'px-0'}`}>
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center justify-start space-x-2 w-full text-left text-sm focus:outline-none transition-all duration-200 rounded-full
                ${isExpanded ? 'p-2' : 'p-1.5'}
                ${activeSection === section.id
                  ? `${section.color} text-white`
                  : 'text-gray-600 hover:text-orange-500 hover:bg-gray-100'
                }`}
            >
              <section.icon size={isExpanded ? 20 : 18} className="flex-shrink-0" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    className="truncate"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const ToggleButton = () => (
    <motion.button
      onClick={togglePanel}
      className="fixed bottom-6 right-5 z-[1000] bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isPanelVisible ? 'close' : 'open'}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isPanelVisible ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );

  return (
    <>
      <QuickAccessPanel />
      {screenSize === 'sm' && <ToggleButton />}
    </>
  );
};

export default QuickAccess;