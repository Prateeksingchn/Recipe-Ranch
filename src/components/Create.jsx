import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
import localRecipes from "../data/recipes";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reduxRecipes = useSelector((state) => state.recipeReducer.recipes);

    const [recipeData, setRecipeData] = useState({
        image: "",
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        category: "",
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const allRecipes = [...localRecipes, ...(reduxRecipes || [])].filter(Boolean);
        const uniqueCategories = [...new Set(allRecipes.map(recipe => recipe.category))];
        setCategories(uniqueCategories);

        if (uniqueCategories.length > 0 && !recipeData.category) {
            setRecipeData(prev => ({ ...prev, category: uniqueCategories[0] }));
        }
    }, [reduxRecipes, recipeData.category]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipeData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            ...recipeData,
            name: recipeData.title,
            ingredients: recipeData.ingredients.split(',').map(item => item.trim()),
            instructions: recipeData.instructions.split(',').map(item => item.trim()),
        };

        const updatedRecipes = [...localRecipes, ...(reduxRecipes || []), newRecipe].filter(Boolean);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        dispatch(asyncgetrecipies());
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-8">
                Create New Recipe
            </h1>
            <div className="mb-4">
                <input
                    type="url"
                    name="image"
                    value={recipeData.image}
                    onChange={handleInputChange}
                    placeholder="Recipe Image URL"
                    required
                    className="w-full border rounded-md px-4 py-2 mb-2"
                />
                {recipeData.image && (
                    <img
                        src={recipeData.image}
                        alt="Recipe preview"
                        className="w-full h-48 object-cover rounded-md"
                    />
                )}
            </div>
            <input
                type="text"
                name="title"
                value={recipeData.title}
                onChange={handleInputChange}
                placeholder="Recipe Name"
                required
                className="w-full border rounded-md px-4 py-2 mb-4"
            />
            <select
                name="category"
                value={recipeData.category}
                onChange={handleInputChange}
                required
                className="w-full border rounded-md px-4 py-2 mb-4"
            >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
            <textarea
                name="description"
                value={recipeData.description}
                onChange={handleInputChange}
                placeholder="Recipe description..."
                required
                className="w-full border rounded-md px-4 py-2 mb-4"
            />
            <textarea
                name="ingredients"
                value={recipeData.ingredients}
                onChange={handleInputChange}
                placeholder="Recipe ingredients (comma-separated)"
                required
                className="w-full border rounded-md px-4 py-2 mb-4"
            />
            <textarea
                name="instructions"
                value={recipeData.instructions}
                onChange={handleInputChange}
                placeholder="Recipe instructions (comma-separated)"
                required
                className="w-full border rounded-md px-4 py-2 mb-6"
            />
            <div className="text-right">
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Publish Recipe →
                </button>
            </div>
        </form>
    );
};

export default Create;