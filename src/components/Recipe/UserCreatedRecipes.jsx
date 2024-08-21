import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RecipeList from "./RecipeList";

const UserCreatedRecipes = ({ userCreatedRecipes }) => {
  return (
    <div className="w-full mb-8 bg-blue-100 p-6 rounded-3xl px-6 mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-3xl font-[Righteous] font-extralight text-[#cc0000]">
          Our Latest Recipes
        </h2>
        <Link to="/latest">
          <button className="flex gap-[2px] underline text-[#cc0000] text-[15px] font-bold py-3 px-4 rounded-full hover:scale-105 duration-300">
            <span>View All Latest Recipes</span>
            <ArrowRight className=" h-7 w-6" />
          </button>
        </Link>
      </div>
      <RecipeList recipes={userCreatedRecipes.slice(0, 4)} isUserCreated={true} columns={2} />
    </div>
  );
};

export default UserCreatedRecipes;