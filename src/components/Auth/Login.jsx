import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

// Background Animation Component (similar to Signup)
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Welcome back to Culinary Delights! 🎉');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setError(
        error.code === 'auth/wrong-password' 
          ? 'Invalid email or password' 
          : error.message
      );
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Check if this is a new user
      if (result._tokenResponse?.isNewUser) {
        toast.success('Welcome to Culinary Delights! 🎉');
      } else {
        toast.info('Welcome back to Culinary Delights! 🎉');
      }
      navigate('/');
    } catch (error) {
      console.error('Google sign-in error:', error);
      // More specific error handling
      let errorMessage = 'Google sign-in failed. Please try again.';
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Sign-in cancelled. Please try again.';
      } else if (error.code === 'auth/popup-blocked') {
        errorMessage = 'Pop-up blocked by browser. Please allow pop-ups and try again.';
      }
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
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
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xl font-bold text-gray-900"
            >
              Login
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-1 text-xs text-gray-600"
            >
              More than 15,000 recipes from around the world!
            </motion.p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-2 bg-red-50 text-red-500 rounded-lg text-xs text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="text-xs font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none"
                disabled={loading}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-2 px-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 mt-4"
            >
              {loading ? 'Logging in...' : 'LOGIN'}
            </motion.button>

            {/* Social Login Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">
                  Login with
                </span>
              </div>
            </div>

            {/* Google Login Button */}
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
                alt="Google"
                className="w-4 h-4 mr-2"
              />
              Continue with Google
            </motion.button>

            {/* Sign Up Link */}
            <p className="mt-3 text-center text-xs text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;