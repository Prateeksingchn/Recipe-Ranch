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
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Link
        to="/#top"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Top Rated Recipes
      </Link>
      <div className="bg-white rounded-3xl shadow-lg shadow-stone-400 overflow-hidden px-6 py-8 my-5 sm:px-8 md:px-4 lg:px-10 xl:px-14 sm:py-10 lg:py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full sm:w-full md:w-[45%] lg:w-[45%] xl:w-[55%] ">
            <img
              src={`/${recipe.image}`}
              alt={recipe.title}
              className="w-full h-auto md:h-[450px] lg:h-[570px] xl:h-[700px] object-cover mt-2 rounded-xl"
            />
          </div>
          <div className="w-full md:w-[55%]">
            <h1 className="text-4xl sm:text-5xl text-[#6e95b2] font-bold mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 w-full md:w-[500px] mb-4 sm:ml-2">
              {recipe.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 mt-5 pl-0 sm:pl-4 pr-0 sm:pr-20">
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
            <div className="p-2 sm:p-4 md:p-10 lg:p-12">
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