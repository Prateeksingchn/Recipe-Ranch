import React from "react";
import { motion } from "framer-motion";
import { Leaf, Clock, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

// Recipe template
const recipeTemplate = {
  id: "",  // Unique identifier for the recipe
  title: "",  // Name of the recipe
  chef: "",  // Name of the chef
  image: "",  // Path to the image file
  calories: 0,  // Number of calories per serving
  time: 0,  // Preparation time in minutes
  dietType: "",  // e.g., "Vegan", "Low-Carb", "Keto", "Paleo"
  ingredients: [],  // Array of ingredients
  instructions: [],  // Array of step-by-step instructions
  nutritionFacts: {  // Detailed nutrition information
    protein: 0,  // in grams
    carbs: 0,  // in grams
    fat: 0,  // in grams
    fiber: 0,  // in grams
  },
};

// Example nutrition recipes
const nutritionRecipes = [
  {
    id: "1",
    title: "Quinoa Veggie Bowl",
    chef: "Jamie Oliver",
    image: "veggieBowl.png",
    calories: 350,
    time: 25,
    dietType: "Vegan",
    ingredients: [
      "1 cup quinoa",
      "2 cups mixed vegetables (broccoli, carrots, bell peppers)",
      "1 tbsp olive oil",
      "1 tsp cumin",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Steam the mixed vegetables until tender-crisp.",
      "In a large bowl, combine cooked quinoa and vegetables.",
      "Drizzle with olive oil and sprinkle with cumin, salt, and pepper.",
      "Toss everything together and serve warm.",
    ],
    nutritionFacts: {
      protein: 12,
      carbs: 45,
      fat: 9,
      fiber: 8,
    },
  },
  {
    id: "2",
    title: "Greek Yogurt Parfait",
    chef: "Giada De Laurentiis",
    image: "greekyogurt.webp",
    calories: 280,
    time: 10,
    dietType: "Low-Carb",
    ingredients: [
      "1 cup Greek yogurt",
      "1/4 cup mixed berries",
      "1 tbsp honey",
      "2 tbsp granola",
    ],
    instructions: [
      "In a glass or bowl, layer half of the Greek yogurt.",
      "Add a layer of mixed berries.",
      "Drizzle with half of the honey.",
      "Repeat the layers with the remaining yogurt and berries.",
      "Top with granola and drizzle with the remaining honey.",
    ],
    nutritionFacts: {
      protein: 20,
      carbs: 30,
      fat: 8,
      fiber: 3,
    },
  },
];

const NutritionRecipeCard = ({ recipe, index }) => (
  <Link to={`/nutrition-recipe/${recipe.id}`} className="block">
    <motion.div
      className="relative overflow-hidden rounded-[30px] shadow-lg w-full h-[530px] group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <img
        src={`/${recipe.image}`}
        alt={recipe.title}
        className="w-full h-full object-cover object-left-top transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-sm mb-3 flex items-center">
          <ChefHat size={16} className="mr-2" />
          {recipe.chef}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center text-sm">
            <Leaf size={16} className="mr-2" />
            {recipe.calories} cal
          </span>
          <span className="flex items-center text-sm">
            <Clock size={16} className="mr-2" />
            {recipe.time} mins
          </span>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
        {recipe.dietType}
      </div>
    </motion.div>
  </Link>
);

const NutritionRecipes = () => {
  return (
    <section className="py-16 bg-zinc-200 rounded-3xl my-5">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-[#333] relative inline-block left-1/2 transform -translate-x-1/2">
          <span
            className="relative z-10"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Nutritious Delights
          </span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-green-300 transform -skew-x-12"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nutritionRecipes.map((recipe, index) => (
            <NutritionRecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionRecipes;