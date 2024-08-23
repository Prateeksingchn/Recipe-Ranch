import React, { useState } from 'react';
import { ChefHat, Coffee, Star, Award, Apple, MessageCircle, Gift } from 'lucide-react';

const QuickAccess = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'hero', label: 'Home', icon: ChefHat, color: 'bg-red-500' },
    { id: 'explore', label: 'Explore', icon: Coffee, color: 'bg-blue-500' },
    { id: 'featured', label: 'Featured', icon: Star, color: 'bg-yellow-500' },
    { id: 'top', label: 'Top Picks', icon: Award, color: 'bg-green-500' },
    { id: 'nutrition', label: 'Nutrition', icon: Apple, color: 'bg-purple-500' },
    { id: 'testimonials', label: 'Reviews', icon: MessageCircle, color: 'bg-pink-500' },
    { id: 'cta', label: 'Join Us', icon: Gift, color: 'bg-indigo-500' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <div 
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-[140px] p-3' : 'w-14 p-2'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className={`space-y-2 ml-1 ${isExpanded ? 'px-1' : 'px-0'}`}>
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center justify-start space-x-2 w-full text-left text-sm focus:outline-none transition-all duration-200 rounded-full ${
                isExpanded ? 'p-2' : 'p-1.5'
              } ${
                activeSection === section.id 
                  ? `${section.color} text-white` 
                  : 'text-gray-600 hover:text-orange-500 hover:bg-gray-100'
              }`}
            >
              <section.icon size={isExpanded ? 20 : 18} className="flex-shrink-0" />
              {isExpanded && (
                <span className="truncate transition-opacity duration-200">
                  {section.label}
                </span>
              )}
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickAccess;