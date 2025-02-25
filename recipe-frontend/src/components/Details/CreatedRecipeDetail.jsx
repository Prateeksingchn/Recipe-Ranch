import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../../store/actions/recipeActions";
import {
  ArrowLeft,
  ChevronRight,
  ChefHat,
  Clock,
  Users,
  Star,
} from "lucide-react";

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
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Recipes
      </Link>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden p-2">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-shrink-0 w-full md:w-auto p-2">
            <img
              className="h-64 w-full sm:h-96 sm:w-[450px] md:h-[460px] md:w-[400px] lg:h-[400px] lg:w-[450px] object-cover rounded-xl"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div className="p-4 sm:p-4 md:p-6 lg:p-8 flex-grow">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
              {recipe.title}
            </h1>
            <h5 className="text-gray-600 mb-4 text-sm max-w-md">
              {recipe.description}
            </h5>

            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.category && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {recipe.category}
                </span>
              )}
              {recipe.subcategory && (
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {recipe.subcategory}
                </span>
              )}
              {recipe.difficulty && (
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {recipe.difficulty}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-600 mb-6 space-y-2">
              <span className="flex items-center">
                <Clock size={16} className="mr-2" /> {recipe.time}
              </span>
              <span className="flex items-center">
                <Users size={16} className="mr-2" /> {recipe.servings} servings
              </span>
              <span className="flex items-center text-gray-600">
                <ChefHat size={16} className="mr-2" />
                Chef: {recipe.chefName}
              </span>
            </div>

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-col md:space-y-2 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4 xl:flex-row xl:space-y-0 xl:space-x-4 mb-4">
              <Link
                to={`/update-recipe/${params.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-bold py-2 px-4 rounded-full transition duration-300 text-center"
              >
                Update Recipe
              </Link>
              <button
                onClick={DeleteHandler}
                className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Delete Recipe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-4 mt-4 border-t border-gray-200 mx-auto">
          <div className="w-full md:w-2/5 p-4 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc pl-5 space-y-2">
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

          <div className="w-full md:w-3/5 p-4 md:p-8">
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
