// Create.jsx
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
import localRecipes from "../data/recipes";  // Import local recipe data

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reduxRecipes = useSelector((state) => state.recipeReducer.recipes);

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Combine local and Redux recipes
        const allRecipes = [...localRecipes, ...(reduxRecipes || [])].filter(Boolean);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(allRecipes.map(recipe => recipe.category))];
        setCategories(uniqueCategories);

        // Set default category if available
        if (uniqueCategories.length > 0 && !category) {
            setCategory(uniqueCategories[0]);
        }
    }, [reduxRecipes, category]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            name: title,
            description,
            ingredients,
            instructions,
            category,
        };

        const updatedRecipes = [...localRecipes, ...(reduxRecipes || []), newRecipe].filter(Boolean);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        dispatch(asyncgetrecipies());
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };

    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto pb-5">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>
            <input
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
                required
            />
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
                required
            />
            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                required
            >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe description..."
                required
            ></textarea>
            <textarea
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe ingredients -> 'use comma to separate ingredients'..."
                required
            ></textarea>
            <textarea
                onChange={(e) => setInstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe instructions -> 'use comma to separate instructions'..."
                required
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;