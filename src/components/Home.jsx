import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/random?number=3&apiKey=3dc3ff0ca9d248ebbd21305dd7fbb906`
                );
                setRecipes(response.data.recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <div className="w-full flex flex-col items-center h-auto  px-5 lg:px-20 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-green-600">
                    SIMPLE AND TASTY RECIPES
                </h1>
                <p className="text-zinc-500 mt-5 mb-10">
                    Discover delicious recipes with simple ingredients and easy steps. Perfect for home cooking enthusiasts and busy individuals alike.
                </p>
                <button className="bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-10">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="max-w-xs bg-white rounded-lg shadow-lg">
                        <img
                            className="w-full h-48 rounded-t-lg object-cover"
                            src={recipe.image}
                            alt={recipe.title}
                        />
                        <div className="p-5">
                            <h2 className="text-2xl font-bold text-green-600">{recipe.title}</h2>
                            <p className="text-gray-700 mt-3">
                                {recipe.summary
                                    ? recipe.summary.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 100)
                                    : "No summary available"}
                                ...
                            </p>
                            <a
                                href={recipe.sourceUrl}
                                className="text-green-600 hover:text-green-800 duration-200 mt-5 block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Recipe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
