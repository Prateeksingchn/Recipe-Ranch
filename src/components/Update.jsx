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
    const recipe = recipes && recipes.find((r) => r.id === params.id);

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [time, setTime] = useState("");
    const [servings, setServings] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [chefName, setChefName] = useState("");

    useEffect(() => {
        if (recipe) {
            setImage(recipe.image);
            setTitle(recipe.title);
            setDescription(recipe.description);
            setIngredients(Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients);
            setInstructions(Array.isArray(recipe.instructions) ? recipe.instructions.join(", ") : recipe.instructions);
            setCategory(recipe.category || "");
            setSubcategory(recipe.subcategory || "");
            setTime(recipe.time || "");
            setServings(recipe.servings || "");
            setDifficulty(recipe.difficulty || "");
            setChefName(recipe.chefName || "");
        }
    }, [recipe]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            image,
            title,
            description,
            ingredients,
            instructions,
            category,
            subcategory,
            time: parseInt(time),
            servings: parseInt(servings),
            difficulty,
            chefName,
        };
        const copyRecipe = [...recipes];
        const recipeIndex = recipes.findIndex((r) => r.id === params.id);
        copyRecipe[recipeIndex] = updatedRecipe;

        localStorage.setItem("recipes", JSON.stringify(copyRecipe));
        dispatch(asyncgetrecipies());
        toast.success("Recipe Updated Successfully!");
        navigate("/recipes");
    };

    const handleBack = () => {
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
        <div className="w-[70%] m-auto pb-5">
            <button 
                onClick={handleBack}
                className="mt-5 mb-5 rounded-md text-xl bg-gray-300 text-gray-700 py-2 px-5 hover:bg-gray-400 duration-200"
            >
                &#8592; Back to Recipes
            </button>
            <form onSubmit={SubmitHandler}>
                <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                    Update <br /> Existing Recipe
                </h1>
                <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    type="url"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe Image URL"
                />
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe Name"
                />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe description..."
                ></textarea>
                <textarea
                    onChange={(e) => setIngredients(e.target.value)}
                    value={ingredients}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe ingredients -> 'use comma to separate ingredients'..."
                ></textarea>
                <textarea
                    onChange={(e) => setInstructions(e.target.value)}
                    value={instructions}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Recipe instructions -> 'use comma to separate instructions'..."
                ></textarea>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                >
                    <option value="">Select Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
                <select
                    onChange={(e) => setSubcategory(e.target.value)}
                    value={subcategory}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                >
                    <option value="">Select Subcategory</option>
                    <option value="indian">Indian</option>
                    <option value="italian">Italian</option>
                    <option value="american">American</option>
                    <option value="thai">Thai</option>
                    <option value="french">French</option>
                    <option value="japanese">Japanese</option>
                    <option value="mexican">Mexican</option>
                    <option value="chinese">Chinese</option>
                    <option value="european">European</option>
                    <option value="other">Other</option>
                </select>
                <input
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    type="number"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Cooking Time (in minutes)"
                />
                <input
                    onChange={(e) => setServings(e.target.value)}
                    value={servings}
                    type="number"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Number of Servings"
                />
                <select
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                >
                    <option value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <input
                    onChange={(e) => setChefName(e.target.value)}
                    value={chefName}
                    type="text"
                    className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Chef Name"
                />
                <div className="w-full text-right">
                    <button 
                        type="submit"
                        className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
                    >
                        Re-Publish Recipe &nbsp; &#8594;
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;