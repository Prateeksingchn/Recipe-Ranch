import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, GraduationCap, Apple, BookOpen, Instagram, Twitter, Facebook, ArrowRight, X } from "lucide-react";

const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [email, setEmail] = useState("");

  const features = [
    { icon: ChefHat, title: "Gourmet Recipes", description: "Discover chef-curated recipes for every occasion." },
    { icon: GraduationCap, title: "Cooking Classes", description: "Join our online masterclasses to refine your skills." },
    { icon: Apple, title: "Ingredient Guide", description: "Learn about seasonal ingredients and their uses." },
    { icon: BookOpen, title: "Recipe Collections", description: "Explore themed recipe collections for inspiration." },
  ];

  const quickLinks = ["About Us", "Contact", "Privacy Policy", "Terms of Service"];
  const latestRecipes = ["Summer Salad", "Grilled Salmon", "Vegan Burger", "Chocolate Cake"];

  const MotionLink = motion(motion.a);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Subscribed:", email);
    setIsNewsletterOpen(false);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-[#EE4130] to-[#f75c5c] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-[30px] ">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-between items-start border-t border-white border-opacity-20 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <motion.h4 
              className="text-3xl font-bold mb-4"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Tasty Bites
            </motion.h4>
            <p className="text-sm opacity-80 mb-6">Bringing delicious recipes to your kitchen since 2020.</p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <MotionLink
                  key={index}
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </MotionLink>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-sm hover:text-yellow-300 transition-colors duration-300 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Latest Recipes</h4>
            <ul className="space-y-2">
              {latestRecipes.map((recipe, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-sm hover:text-yellow-300 transition-colors duration-300 flex items-center">
                    <ChefHat className="w-4 h-4 mr-2" />
                    {recipe}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm opacity-80 mb-4">Join our community for exclusive recipes and cooking tips!</p>
            <motion.button
              className="bg-yellow-300 text-[#EE4130] py-2 px-6 rounded-full flex items-center justify-center font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNewsletterOpen(true)}
            >
              Subscribe to Newsletter
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12 pt-8 border-t border-white border-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-sm opacity-80">© 2024 Tasty Bites Recipe Website. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="w-64 h-64 bg-yellow-300 rounded-full opacity-10 absolute -top-32 -left-32"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="w-96 h-96 bg-white rounded-full opacity-5 absolute -bottom-48 -right-48"
          animate={{ scale: [1, 1.1, 1], rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Newsletter Modal */}
      <AnimatePresence>
        {isNewsletterOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsNewsletterOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-[#EE4130]">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">Get weekly recipes and cooking tips delivered to your inbox!</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EE4130]"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full bg-[#EE4130] text-white py-3 rounded-md font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;


