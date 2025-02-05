import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

// Background Animation Component (similar to Login)
const BackgroundAnimation = () => (
  <div className="fixed inset-0 z-0">
    {/* Background Pattern */}
    <div className="absolute inset-0">
      <div className="grid grid-cols-6 gap-8 opacity-5">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-12 h-12 border-2 border-orange-300 rounded-full"
          />
        ))}
      </div>
    </div>

    {/* Static Food Icons */}
    {[ 
      { src: "https://api.iconify.design/noto:hamburger.svg", alt: "Burger", size: "w-16", position: "top-10 left-28" },
      { src: "https://api.iconify.design/emojione:pot-of-food.svg", alt: "Pot", size: "w-14", position: "top-52 right-44" },
      { src: "https://api.iconify.design/noto:spaghetti.svg", alt: "Pasta", size: "w-14", position: "top-32 left-[250px]" },
      { src: "https://api.iconify.design/noto:chopsticks.svg", alt: "Chopsticks", size: "w-12", position: "bottom-40 right-64" },
      { src: "https://api.iconify.design/noto:broccoli.svg", alt: "Vegetables", size: "w-16", position: "top-1/2 left-32" },
      { src: "https://api.iconify.design/noto:sushi.svg", alt: "Sushi", size: "w-16", position: "bottom-80 right-20" },
      { src: "https://api.iconify.design/twemoji:shortcake.svg", alt: "Cake", size: "w-16", position: "bottom-20 left-44" },
      { src: "https://api.iconify.design/noto:ice-cream.svg", alt: "Ice Cream", size: "w-14", position: "top-52 right-[480px]" },
      { src: "https://api.iconify.design/fluent-emoji:pizza.svg", alt: "Pizza", size: "w-16", position: "bottom-56 right-1/4" },
      { src: "https://api.iconify.design/noto:croissant.svg", alt: "Croissant", size: "w-12", position: "top-1/3 left-4" },
      { src: "https://api.iconify.design/noto:taco.svg", alt: "Taco", size: "w-14", position: "bottom-1/3 left-72" },
      { src: "https://api.iconify.design/noto:curry-rice.svg", alt: "Curry", size: "w-16", position: "top-10 right-2" },
      { src: "https://api.iconify.design/noto:sandwich.svg", alt: "Sandwich", size: "w-14", position: "bottom-16 right-28" },
      { src: "https://api.iconify.design/noto:dumpling.svg", alt: "Dumpling", size: "w-12", position: "top-36 left-1/3" },
      { src: "https://api.iconify.design/noto:hot-beverage.svg", alt: "Coffee", size: "w-14", position: "bottom-40 left-16" },
      { src: "https://api.iconify.design/noto:bento-box.svg", alt: "Bento", size: "w-14", position: "top-28 right-1/4" },
      { src: "https://api.iconify.design/noto:cupcake.svg", alt: "Cupcake", size: "w-12", position: "bottom-24 right-[440px]" },
      { src: "https://api.iconify.design/noto:french-fries.svg", alt: "Fries", size: "w-14", position: "top-56 left-1/4" }
    ].map((item, i) => (
      <motion.div
        key={`food-${i}`}
        animate={{
          y: [0, -20, 0],
          rotate: [0, i % 2 ? 20 : -20, 0],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5
        }}
        className={`absolute ${item.position}`}
      >
        <img
          src={item.src}
          alt={item.alt}
          className={`${item.size} opacity-80 drop-shadow-lg`}
        />
      </motion.div>
    ))}

    {/* Floating Ingredients */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`ingredient-${i}`}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3 + i,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5
        }}
        style={{
          left: `${10 + i * 8}%`,
          top: `${20 + (i % 4) * 20}%`
        }}
        className="absolute"
      >
        <div 
          className={`w-3 h-3 rounded-full ${
            ['bg-orange-400', 'bg-red-400', 'bg-yellow-400'][i % 3]
          } blur-sm opacity-40`}
        />
      </motion.div>
    ))}

    {/* Steam Effects */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`steam-${i}`}
        animate={{
          y: [-50, -100],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3
        }}
        className="absolute"
        style={{
          left: `${30 + i * 10}%`,
          bottom: '20%'
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full blur-md" />
      </motion.div>
    ))}
  </div>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cookingExperience: 'beginner',
    favoriteFood: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success('Welcome to Culinary Delights! 🎉');
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      setError(
        error.code === 'auth/email-already-in-use'
          ? 'Email already in use'
          : error.message
      );
      toast.error('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Welcome to Culinary Delights! 🎉');
      navigate('/');
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError(error.message);
      toast.error('Google sign-up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 relative overflow-hidden py-4">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur-lg w-full max-w-sm p-6 rounded-2xl shadow-xl">
          <div className="text-center mb-6">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
              alt="Logo"
              className="mx-auto h-12 w-12 rounded-full shadow-md"
            />
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xl font-bold text-gray-900"
            >
              Join Our Kitchen!
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-1 text-xs text-gray-600"
            >
              More than 15,000 recipes from around the world!
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 p-2 rounded-lg"
              >
                <p className="text-red-500 text-center text-xs">{error}</p>
              </motion.div>
            )}

            <div>
              <label htmlFor="fullName" className="text-xs font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none text-sm"
                value={formData.fullName}
                onChange={handleChange}
                disabled={loading}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none text-sm"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="favoriteFood" className="text-xs font-medium text-gray-700">
                Favorite Food
              </label>
              <input
                id="favoriteFood"
                name="favoriteFood"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none text-sm"
                value={formData.favoriteFood}
                onChange={handleChange}
                disabled={loading}
                placeholder="What's your favorite dish?"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none text-sm"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-xs font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none text-sm"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={loading}
                placeholder="Confirm your password"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-2 px-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 mt-4"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </motion.button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white/80 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google logo" 
                className="w-4 h-4 mr-2"
              />
              Sign up with Google
            </motion.button>

            <p className="mt-3 text-center text-xs text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup; 