import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes && recipes.find((r) => r.id == params.id);

    const [recipeData, setRecipeData] = useState({
        image: "",
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        category: "",
    });

    useEffect(() => {
        if (recipe) {
            setRecipeData({
                image: recipe.image,
                title: recipe.title,
                description: recipe.description,
                ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients,
                instructions: Array.isArray(recipe.instructions) ? recipe.instructions.join(", ") : recipe.instructions,
                category: recipe.category || "",
            });
        }
    }, [recipe]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipeData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            ...recipeData,
            ingredients: recipeData.ingredients.split(',').map(item => item.trim()),
            instructions: recipeData.instructions.split(',').map(item => item.trim()),
        };
        const copyRecipe = [...recipes];
        const recipeIndex = recipes.findIndex((r) => r.id == params.id);
        copyRecipe[recipeIndex] = updatedRecipe;

        localStorage.setItem("recipes", JSON.stringify(copyRecipe));
        dispatch(asyncgetrecipies());

        toast.success("Recipe Updated Successfully!");
        navigate("/recipes");
    };

    if (!recipe) {
        return (
            <h1 className="w-full text-center text-4xl text-green-600 mt-10">
                Loading Recipe...
            </h1>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-8">
                Update Existing Recipe
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
            <input
                type="text"
                name="category"
                value={recipeData.category}
                onChange={handleInputChange}
                placeholder="Recipe Category"
                className="w-full border rounded-md px-4 py-2 mb-4"
            />
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
                    Re-Publish Recipe →
                </button>
            </div>
        </form>
    );
};

export default Update;