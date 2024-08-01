import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        try {
            const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
            if (Array.isArray(storedRecipes)) {
                setRecipes(storedRecipes);
            }
        } catch (error) {
            console.error("Error parsing recipes from localStorage", error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }, [recipes]);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
};