import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, Clock, ChefHat, ArrowLeft } from "lucide-react";
import topRecipes from "../../data/topRecipes";
import { Link } from "react-router-dom";

const TopRecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = topRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/#top"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Top Rated Recipes
      </Link>
      <div className="bg-white rounded-3xl shadow-lg shadow-stone-400 overflow-hidden px-20 py-10 my-5">
        <div className="flex gap-10">
          <div className="w-[45%] ">
            <img
              src={`/${recipe.image}`}
              alt={recipe.title}
              className="w-full h-[550px] object-cover mt-2 rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-5xl text-[#6e95b2] font-bold mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 w-[500px] ml-2 ">
              {recipe.description}
            </p>
            <div className="flex items-center justify-center gap-20 mb-4 mt-5 pl-4 pr-20">
              <span className="flex items-center text-gray-600">
                <ChefHat size={25} className="mr-2" />
                {recipe.chef}
              </span>
              <span className="flex items-center text-gray-600">
                <Eye size={25} className="mr-2" />
                {recipe.views} views
              </span>
              <span className="flex items-center text-gray-600">
                <Clock size={25} className="mr-2" />
                {recipe.time} mins
              </span>
            </div>
            {/* Ingredients and instructions */}
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="mb-2">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRecipeDetail;
