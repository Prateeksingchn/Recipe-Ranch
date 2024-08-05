import React from "react";
import { Link } from "react-router-dom";
import homeRecipes from "../data/homeRecipes";

const Home = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center h-[60vh] mb-12">
                <div className="left w-1/2 ">
                    <h1 className="text-7xl font-extrabold text-green-600">
                        SIMPLE AND TASTY RECIPES
                    </h1>
                    <p className="text-zinc-400 mt-5 mb-10">
                        Discover delicious and easy-to-make recipes for every occasion. 
                        From quick weeknight dinners to impressive dishes for entertaining, 
                        we've got you covered with our collection of simple and tasty recipes.
                    </p>
                    <button className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                        Get Started &nbsp; &#8594;
                    </button>
                </div>
                <img
                    className="w-1/2"
                    src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                    alt="Cooking illustration"
                />
            </div>
            <div className="mt-12">
                <h2 className="text-4xl font-bold text-green-600 mb-6">Top Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homeRecipes.map((recipe) => (
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <img src={recipe.image} alt={recipe.name} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
                                <p className="text-gray-600">{recipe.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;