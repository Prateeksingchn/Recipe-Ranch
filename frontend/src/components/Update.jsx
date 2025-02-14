import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
import { ArrowLeft, Clock, Users, ChefHat, Image as ImageIcon } from "lucide-react";

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes && recipes.find((r) => r.id === params.id);

    const [formData, setFormData] = useState({
        image: "",
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        category: "",
        subcategory: "",
        time: "",
        servings: "",
        difficulty: "",
        chefName: "",
    });

    useEffect(() => {
        if (recipe) {
            setFormData({
                image: recipe.image || "",
                title: recipe.title || "",
                description: recipe.description || "",
                ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients || "",
                instructions: Array.isArray(recipe.instructions) ? recipe.instructions.join(", ") : recipe.instructions || "",
                category: recipe.category || "",
                subcategory: recipe.subcategory || "",
                time: recipe.time || "",
                servings: recipe.servings || "",
                difficulty: recipe.difficulty || "",
                chefName: recipe.chefName || "",
            });
        }
    }, [recipe]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            ...formData,
            time: parseInt(formData.time),
            servings: parseInt(formData.servings),
        };
        const copyRecipe = [...recipes];
        const recipeIndex = recipes.findIndex((r) => r.id === params.id);
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
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <button
                onClick={() => navigate("/recipes")}
                className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
            </button>

            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-green-600 sm:text-5xl md:text-6xl">
                    Update Existing Recipe
                </h1>
                <p className="mt-3 text-xl text-gray-500">
                    Refine and perfect your culinary masterpiece
                </p>
            </div>

            <form onSubmit={SubmitHandler} className="space-y-12">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Recipe Image
                                </label>
                                <div className="flex items-center space-x-4">
                                    <div className="relative flex-grow">
                                        <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Recipe Image URL"
                                        />
                                    </div>
                                    {formData.image && (
                                        <img
                                            src={formData.image}
                                            alt="Recipe preview"
                                            className="h-20 w-20 object-cover rounded-md"
                                        />
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Recipe Name
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter recipe name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Describe your recipe..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Ingredients
                                </label>
                                <textarea
                                    name="ingredients"
                                    value={formData.ingredients}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="List ingredients (separate with commas)"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Instructions
                                </label>
                                <textarea
                                    name="instructions"
                                    value={formData.instructions}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Explain the cooking process step by step..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Subcategory
                                    </label>
                                    <select
                                        name="subcategory"
                                        value={formData.subcategory}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
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
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Cooking Time (minutes)
                                    </label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="number"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Cooking time"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Number of Servings
                                    </label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="number"
                                            name="servings"
                                            value={formData.servings}
                                            onChange={handleChange}
                                            className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Number of servings"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Difficulty
                                    </label>
                                    <select
                                        name="difficulty"
                                        value={formData.difficulty}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="">Select Difficulty</option>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Chef Name
                                    </label>
                                    <div className="relative">
                                        <ChefHat className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            name="chefName"
                                            value={formData.chefName}
                                            onChange={handleChange}
                                            className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Re-Publish Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;