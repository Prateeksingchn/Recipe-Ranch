import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../../store/actions/recipeActions";
import { ArrowLeft, ChevronRight, ChefHat, Clock, Users, Star } from "lucide-react";

const CreatedRecipeDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { recipes } = useSelector((state) => state.recipeReducer);
  const recipe = recipes.find((r) => r.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DeleteHandler = () => {
    const updatedRecipes = recipes.filter((r) => r.id !== params.id);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    dispatch(asyncgetrecipies());
    toast.success("Recipe Deleted Successfully!");
    navigate("/recipes");
  };

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl text-gray-600">Loading Recipe...</h1>
      </div>
    );
  }
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/recipes"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Recipes
      </Link>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 mt-8 ml-12 ">
            <img
              className="h-[400px] w-full object-cover md:w-48 lg:w-[450px] m-2 rounded-xl"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div className="p-10">
            <h1 className="text-4xl font-semibold text-gray-900 mb-2  ">
              {recipe.title}
            </h1>
            <h5 className="text-gray-600 mb-4 text-sm w-[400px] ">
              {recipe.description}
            </h5>

            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.category && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {recipe.category}
                </span>
              )}
              {recipe.subcategory && (
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {recipe.subcategory}
                </span>
              )}
              {recipe.difficulty && (
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {recipe.difficulty}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-600 mb-10">
              <span className="flex items-center">
                <Clock size={16} className="mr-2" /> {recipe.time}
              </span>
              <span className="flex items-center">
                <Users size={16} className="mr-2" /> {recipe.servings} servings
              </span>
              {/* <p>Chef: {recipe.chefName}</p> */}
              <span className="flex items-center text-gray-600"> 
                <ChefHat size={16} className="mr-2" />Chef: {recipe.chefName} 
              </span>
            </div>

            <div className="flex space-x-4 mb-4 mt-5">
              <Link
                to={`/update-recipe/${params.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl transition duration-300"
              >
                Update Recipe
              </Link>
              <button
                onClick={DeleteHandler}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-3xl transition duration-300"
              >
                Delete Recipe
              </button>
            </div>
          </div>
        </div>

        <div className="w-[90%] flex gap-2 px-4 mt-4 border-t border-gray-200 mx-auto">
          <div className="w-[40%] p-8 ">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ingredients
            </h2>
            <ul className="list-decimal pl-5 space-y-2">
              {recipe.ingredients
                .split(",")
                .filter(Boolean)
                .map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient.trim()}
                  </li>
                ))}
            </ul>
          </div>

          <div className="w-[60%] p-8 ">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Instructions
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions
                .split(".")
                .filter(Boolean)
                .map((instruction, index) => (
                  <li key={index} className="text-gray-700">
                    {instruction.trim()}.
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedRecipeDetail;