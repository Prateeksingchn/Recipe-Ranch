import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import { recipecontext } from "../contexts/RecipeContext";

const Recipes = () => {
    const { pathname } = useLocation();
    const [recipes, setRecipes] = useContext(recipecontext);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/random?number=3&apiKey=YOUR_SPOONACULAR_API_KEY`
                );
                setRecipes(response.data.recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        // Only fetch if recipes array is empty
        if (recipes.length === 0) {
            fetchRecipes();
        }
    }, [recipes, setRecipes]);

    return (
        <div className=" ">
            <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
            <p className="text-center text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="recipe-cards mt-[5%] flex flex-wrap p-5">
                {recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
                        No Recipe Found
                    </h1>
                )}
            </div>

            {pathname === "/recipes" && (
                <a
                    href="/create-recipe"
                    className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%] bg-green-200 gap-x-3 flex items-center"
                >
                    <i className="text-3xl text-green-600 ri-add-box-line"></i>
                    Create Recipe
                </a>
            )}
        </div>
    );
};

export default Recipes;
