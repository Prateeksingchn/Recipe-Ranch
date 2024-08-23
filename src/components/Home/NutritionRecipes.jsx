import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Clock, ChefHat, Award, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Updated recipe template
const recipeTemplate = {
  id: "",
  title: "",
  chef: "",
  image: "",
  calories: 0,
  time: 0,
  dietType: "",
  mealCategory: "", // New field
  difficulty: "", // New field
  ingredients: [],
  instructions: [],
  nutritionFacts: {
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
  },
  rating: 0, // New field
};

// Updated example nutrition recipes
const nutritionRecipes = [
  {
    id: "1",
    title: "Quinoa Veggie Bowl",
    chef: "Jamie Oliver",
    image: "veggieBowl.png",
    calories: 350,
    time: 25,
    dietType: "Vegan",
    mealCategory: "Lunch",
    difficulty: "Easy",
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
    rating: 4.5,
  },
  {
    id: "2",
    title: "Greek Yogurt Parfait",
    chef: "Giada De Laurentiis",
    image: "greekyogurt.webp",
    calories: 280,
    time: 10,
    dietType: "Low-Carb",
    mealCategory: "Breakfast",
    difficulty: "Easy",
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
    rating: 4.8,
  },
  {
    id: "3",
    title: "Grilled Chicken Salad",
    chef: "Gordon Ramsay",
    image: "grilled-chicken-salad.jpg",
    calories: 400,
    time: 30,
    dietType: "High-Protein",
    mealCategory: "Lunch",
    difficulty: "Medium",
    ingredients: [
      "200g grilled chicken breast",
      "4 cups mixed salad greens",
      "1/4 cup cherry tomatoes",
      "1/4 cup cucumber, sliced",
      "2 tbsp balsamic vinaigrette",
      "1 oz feta cheese, crumbled",
    ],
    instructions: [
      "Grill the chicken breast and slice it into strips.",
      "In a large bowl, combine mixed salad greens, cherry tomatoes, and cucumber.",
      "Add the grilled chicken strips on top of the salad.",
      "Drizzle with balsamic vinaigrette and sprinkle crumbled feta cheese.",
      "Toss gently and serve immediately.",
    ],
    nutritionFacts: {
      protein: 35,
      carbs: 15,
      fat: 22,
      fiber: 5,
    },
    rating: 4.7,
  },
  {
    id: "4",
    title: "Protein-Packed Smoothie Bowl",
    chef: "Kayla Itsines",
    image: "smoothie-bowl.jpg",
    calories: 320,
    time: 15,
    dietType: "High-Protein",
    mealCategory: "Post-Workout",
    difficulty: "Easy",
    ingredients: [
      "1 scoop vanilla protein powder",
      "1 frozen banana",
      "1/2 cup frozen mixed berries",
      "1/4 cup Greek yogurt",
      "1/4 cup almond milk",
      "1 tbsp chia seeds",
      "1 tbsp almond butter",
    ],
    instructions: [
      "Blend protein powder, frozen banana, mixed berries, Greek yogurt, and almond milk until smooth.",
      "Pour the smoothie into a bowl.",
      "Top with chia seeds and a drizzle of almond butter.",
      "Add additional toppings like granola or fresh fruit if desired.",
    ],
    nutritionFacts: {
      protein: 25,
      carbs: 35,
      fat: 12,
      fiber: 7,
    },
    rating: 4.9,
  },
];

// ... (NutritionRecipeCard component remains the same)

const NutritionRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = nutritionRecipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || recipe.mealCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(nutritionRecipes.map(recipe => recipe.mealCategory))];

  return (
    <section className="py-16 bg-zinc-300 rounded-3xl my-5">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-[#333] relative inline-block left-1/2 transform -translate-x-1/2">
          <span
            className="relative z-10"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Nutritious Delights
          </span>
          <span className="absolute bottom-0 left-0 w-full h-4 bg-orange-400 transform -skew-x-12"></span>
        </h2>
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full p-2 pl-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <NutritionRecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/nutrition"
            className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Explore More Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NutritionRecipes;