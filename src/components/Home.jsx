import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    useEffect(() => {
        document.title = "Simple and Tasty Recipes | Home";
    }, []);

    return (
        <div className="w-full min-h-screen">
            <motion.div 
                className="flex flex-col lg:flex-row justify-between items-center gap-10 min-h-[80vh] p-8 lg:p-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="lg:w-1/2 mb-8 lg:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-green-600 mb-6">
                        SIMPLE AND TASTY RECIPES
                    </h1>
                    <p className="text-zinc-600 mb-10 text-lg">
                        Discover delicious and easy-to-make recipes for every occasion. 
                        From quick weeknight dinners to impressive dishes for entertaining, 
                        we've got you covered with our collection of simple and tasty recipes.
                    </p>
                    <motion.button 
                        className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started &nbsp; &#8594;
                    </motion.button>
                </motion.div>
                <motion.img
                    className="lg:w-1/2 rounded-lg pl-10"
                    src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                    alt="Cooking illustration"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>
            <motion.div 
                className=" py-16 px-8 lg:px-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-green-600 mb-8 text-center">
                    Explore Our Culinary World
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {['Breakfast', 'Lunch', 'Dinner'].map((mealType, index) => (
                        <motion.div 
                            key={mealType}
                            className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                        >
                            <img 
                                src={`https://source.unsplash.com/400x300/?${mealType.toLowerCase()},food`} 
                                alt={mealType} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{mealType} Recipes</h3>
                                <p className="text-gray-600 mb-4">Explore our delicious {mealType.toLowerCase()} recipes.</p>
                                <Link 
                                    to={`/recipes/${mealType.toLowerCase()}`}
                                    className="text-green-600 font-semibold hover:text-green-700"
                                >
                                    View Recipes &rarr;
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Home;