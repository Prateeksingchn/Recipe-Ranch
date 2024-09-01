import React from "react";
import { motion } from "framer-motion";
import { ChefHat, GraduationCap, Apple, BookOpen, Thermometer, Instagram, Twitter, Facebook, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const features = [
    { icon: ChefHat, title: "Gourmet Recipes", description: "Discover chef-curated recipes for every occasion." },
    { icon: GraduationCap, title: "Cooking Classes", description: "Join our online masterclasses to refine your skills." },
    { icon: Apple, title: "Ingredient Guide", description: "Learn about seasonal ingredients and their uses." },
    { icon: BookOpen, title: "Recipe Collections", description: "Explore themed recipe collections for inspiration." },
  ];

  const quickLinks = ["About Us", "Contact", "Privacy Policy", "Terms of Service"];

  const MotionLink = motion(motion.a);

  return (
    <footer className="bg-[#EE4130] text-white py-16 rounded-[30px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-wrap justify-between items-start border-t border-white border-opacity-20 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Tasty Bites</h4>
            <p className="text-sm opacity-80 mb-4 w-[170px] ">Bringing delicious recipes to your kitchen since 2020.</p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <MotionLink
                  key={index}
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
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
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-sm hover:text-yellow-300 transition-colors duration-300">{link}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Latest Recipes</h4>
            <ul className="space-y-2">
              {["Summer Salad", "Grilled Salmon", "Vegan Burger", "Chocolate Cake"].map((recipe, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-sm hover:text-yellow-300 transition-colors duration-300">{recipe}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="p-2 rounded-[26px] px-4 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <motion.button
                type="submit"
                className="bg-yellow-300 text-[#EE4130] py-2 px-4 rounded-[26px] flex items-center justify-center font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
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
    </footer>
  );
};

export default Footer;