import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Blog", path: "/blog" },
    // { name: "About", path: "/about" },
  ];

  const isHomePage = location.pathname === "/";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <nav
      className={`bg-[#EE4130] text-white ${
        isHomePage ? "rounded-t-[30px]" : "rounded-[30px]"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-14 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex-shrink-0 flex items-center ">
              <img
                className="h-[40px] w-[60px] sm:h-[40px] sm:w-[60px] md:h-[47px] md:w-[75px] lg:h-[47px] lg:w-[75px] rounded-xl"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt="Logo"
              />
            </div>
          </Link>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Logout
            </motion.button>
          </div>
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
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="text-white hover:text-yellow-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </button>
        </div>
      </motion.div>

      {/* <div className="flex gap-4">
        <Link 
          to="/login" 
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Sign Up
        </Link>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div> */}
    </nav>
  );
};

export default Nav;
