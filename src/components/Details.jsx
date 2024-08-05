import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
import localRecipes from "../data/recipes";
import homeRecipes from "../data/homeRecipes";
import { nanoid } from 'nanoid';

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const reduxRecipes = useSelector((state) => state.recipeReducer.recipes);
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        dispatch(asyncgetrecipies());
    }, [dispatch]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        // Combine all recipes and assign nanoid if id is missing
        const allRecipes = [...homeRecipes, ...localRecipes, ...(reduxRecipes || [])].map(r => ({
            ...r,
            id: r.id || nanoid()
        }));
        
        console.log("All Recipes:", allRecipes); // Debug log
        console.log("Looking for recipe with id:", id); // Debug log

        // Find the recipe by id
        const foundRecipe = allRecipes.find((r) => r.id.toString() === id.toString());
        
        console.log("Found Recipe:", foundRecipe); // Debug log

        if (foundRecipe) {
            setRecipe(foundRecipe);
            setLoading(false);
        } else {
            console.log("Recipe not found");
            setError("Recipe not found");
            setLoading(false);
            toast.error("Recipe not found");
            setTimeout(() => navigate("/recipes"), 2000);
        }
    }, [reduxRecipes, id, navigate]);

    const deleteHandler = () => {
        const updatedRecipes = [...homeRecipes, ...localRecipes, ...(reduxRecipes || [])].filter((r) => r.id.toString() !== id.toString());
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes.filter(r => !homeRecipes.some(hr => hr.id === r.id))));
        dispatch(asyncgetrecipies()); // Update the Redux store
        toast.success("Recipe Deleted Successfully!");
        navigate("/recipes");
    };

   
    if (loading) {
        return <h1 className="w-full text-center text-4xl text-green-600 mt-10">Loading Recipe...</h1>;
    }

    if (error) {
        return <h1 className="w-full text-center text-4xl text-red-600 mt-10">{error}</h1>;
    }

    if (!recipe) {
        return <h1 className="w-full text-center text-4xl text-red-600 mt-10">No recipe data available</h1>;
    }

    return (
        <div className="w-[80%] m-auto p-5">
            <Link to="/" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex h-[75vh] mt-3">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img className="w-full h-auto object-cover" src={recipe.image} alt={recipe.name} />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {recipe.name}
                    </h1>
                    <p className="text-zinc-400">{recipe.description}</p>
                    <div className="flex justify-between py-10 px-5">
                        <Link
                            to={`/update-recipe/${id}`}
                            className="text-blue-400 border-blue-400 border py-2 px-5"
                        >
                            Update
                        </Link>
                        <button
                            onClick={deleteHandler}
                            className="text-red-400 border-red-400 border py-2 px-5"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Recipe Details
                    </h1>
                    <p className="text-zinc-600 mt-4">{recipe.description}</p>
                    {/* Add more details here if available in your recipe data */}
                </div>
            </div>
        </div>
    );
};

export default Details;