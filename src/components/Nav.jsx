import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#EE4130] text-white rounded-t-3xl">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-14 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            {" "}
            <img
              className="h-[45px] w-auto  rounded-3xl"
              src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
              alt="Logo"
            />{" "}
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="text-white hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <button className="hidden sm:block bg-white text-red-500 px-4 py-2 rounded-full font-semibold">
            Enter
          </button>
          <div className="flex items-center sm:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-yellow-200 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full text-center bg-white text-red-500 px-4 py-2 rounded-full font-semibold mt-2">
            Enter
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
