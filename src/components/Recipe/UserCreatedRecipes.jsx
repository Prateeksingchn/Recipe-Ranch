import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RecipeList from "./RecipeList";

const UserCreatedRecipes = ({ userCreatedRecipes }) => {
  // Slice the userCreatedRecipes array to get only the first 4 recipes
  const limitedRecipes = userCreatedRecipes.slice(0, 4);

  return (
    <div className="w-full mb-8 bg-blue-100 p-6 rounded-3xl px-6 mx-auto shadow-xl shadow-stone-300 ">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-3xl font-[Righteous] font-extralight text-[#cc0000]">
          Our Latest Recipes
        </h2>
        <Link to="/latest">
          <button className="flex gap-[2px] underline text-[#cc0000] text-[15px] font-bold py-3 px-4 rounded-full hover:scale-105 duration-300">
            View All Latest Recipes
            <ArrowRight className=" h-7 w-6 pb-1" />
          </button>
        </Link>
      </div>
      <RecipeList recipes={limitedRecipes} isUserCreated={true} />
      {userCreatedRecipes.length > 4 && (
        <div className="mt-4 text-center">
          {/* <Link
            to="/latest"
            className="text-[#cc0000] underline hover:text-red-700"
          >
            See more latest recipes...
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default UserCreatedRecipes;