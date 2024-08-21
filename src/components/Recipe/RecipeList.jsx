import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, isUserCreated = false }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {recipes.length > 0 ? (
      recipes.map(
        (recipe) =>
          recipe && (
            <RecipeCard
              key={recipe.uri || recipe.id}
              recipe={recipe}
              isUserCreated={isUserCreated}
            />
          )
      )
    ) : (
      <p className="col-span-full text-center text-xl text-gray-500 mt-10">
        No recipes found
      </p>
    )}
  </div>
);

export default RecipeList;