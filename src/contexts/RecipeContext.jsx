import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([]);

    useEffect(() => {
        try {
            const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
            if (Array.isArray(storedRecipes)) {
                setrecipes(storedRecipes);
            }
        } catch (error) {
            console.error("Error parsing recipes from localStorage", error);
        }
    }, []);

    return (
        <recipecontext.Provider value={[recipes, setrecipes]}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
