import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat, ArrowLeft } from "lucide-react";

const recipes = {
  "spicy-corn-pakoras": {
    name: "Spicy Corn Pakoras",
    image: "spicy-corn-pakoras.jpg",
    chef: "Chef Priya",
    prepTime: "25 mins",
    servings: 4,
    ingredients: [
      "2 cups fresh corn kernels",
      "1 cup chickpea flour (besan)",
      "1/4 cup rice flour",
      "1 onion, finely chopped",
      "2 green chilies, finely chopped",
      "1 tsp cumin seeds",
      "1/4 cup chopped coriander leaves",
      "Salt to taste",
      "Oil for deep frying"
    ],
    instructions: [
      "In a large bowl, mix corn kernels, chickpea flour, rice flour, onion, green chilies, cumin seeds, coriander leaves, and salt.",
      "Add water gradually to make a thick batter.",
      "Heat oil in a deep pan over medium heat.",
      "Drop spoonfuls of the batter into the hot oil and fry until golden brown and crispy.",
      "Remove with a slotted spoon and drain on paper towels.",
      "Serve hot with chutney or ketchup."
    ]
  },
  "mushroom-hot-sour-soup": {
    name: "Mushroom Hot & Sour Soup",
    image: "mushroom-hot-sour-soup.jpg",
    chef: "Chef Raj",
    prepTime: "30 mins",
    servings: 4,
    ingredients: [
      "200g mushrooms, sliced",
      "4 cups vegetable broth",
      "1/4 cup rice vinegar",
      "1/4 cup soy sauce",
      "1 tsp white pepper",
      "2 tbsp cornstarch",
      "1 egg, beaten",
      "2 green onions, chopped",
      "1 tbsp sesame oil"
    ],
    instructions: [
      "In a large pot, bring the vegetable broth to a boil.",
      "Add mushrooms, vinegar, soy sauce, and white pepper. Simmer for 5 minutes.",
      "Mix cornstarch with a little water and add to the soup, stirring until it thickens.",
      "Slowly pour in the beaten egg while stirring the soup.",
      "Remove from heat and add sesame oil and green onions.",
      "Serve hot, garnished with extra green onions if desired."
    ]
  },
  // Add more recipes here...
};

const SeasonalRecipeDetails = () => {
  const { slug } = useParams();
  const recipe = recipes[slug];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Link to="/seasonal-specials" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Seasonal Specials
      </Link>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <ChefHat className="w-5 h-5 mr-2" />
            <span className="mr-4">{recipe.chef}</span>
            <Clock className="w-5 h-5 mr-2" />
            <span className="mr-4">{recipe.prepTime}</span>
            <Users className="w-5 h-5 mr-2" />
            <span>{recipe.servings} servings</span>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2 text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
            <ol className="list-decimal list-inside">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="mb-3 text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SeasonalRecipeDetails;