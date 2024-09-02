import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NutritionRecipeCard from "./NutritionRecipeCard";
import UserCreatedNutritionRecipeCard from "./UserCreatedNutritionRecipeCard";

const RecipeGrid = ({ recipes, userCreatedRecipes, onDeleteUserRecipe }) => {
  const renderRecipes = (recipeList, title, isUserCreated = false) => (
    <>
      {recipeList.length > 0 && (
        <h2 className="text-3xl text-[#cc0000] font-bold mb-4 mt-8 ml-2 border-b-4 border-yellow-200 w-[max-content] ">{title}</h2>
      )}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-8 lg:gap-8"
      >
        <AnimatePresence>
          {recipeList.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {isUserCreated ? (
                <UserCreatedNutritionRecipeCard
                  recipe={recipe}
                  onDelete={onDeleteUserRecipe}
                />
              ) : (
                <NutritionRecipeCard recipe={recipe} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );

  const allRecipesEmpty = recipes.length === 0 && userCreatedRecipes.length === 0;

  return (
    <div>
      {renderRecipes(recipes, "All Recipes")}
      {renderRecipes(userCreatedRecipes, "Your Created Recipes", true)}
      {allRecipesEmpty && (
        <motion.p
          className="text-center text-gray-600 text-xl mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          No recipes found. Try adjusting your search or filters, or create a new recipe!
        </motion.p>
      )}
    </div>
  );
};

export default RecipeGrid;