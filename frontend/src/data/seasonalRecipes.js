// src/data/seasonalRecipes.js

export const currentSeason = "Winter Season";

export const seasonalIngredients = [
  { name: "Carrots", icon: "🥕" },
  { name: "Sweet Potato", icon: "🍠" },
  { name: "Spinach", icon: "🍃" },
  { name: "Mustard Greens", icon: "🥬" },
  { name: "Peanuts", icon: "🥜" },
  { name: "Sesame Seeds", icon: "⚪" },
  { name: "Green Peas", icon: "🫛" },
  { name: "Radish", icon: "🥗" },
];

export const featuredRecipes = [
  {
    name: "Gajar Ka Halwa",
    image: "https://i.pinimg.com/236x/18/ab/d1/18abd13a1afd2243126aab4464945fef.jpg",
    chef: "Chef Priya",
    prepTime: "45 mins",
    slug: "gajar-ka-halwa",
    servings: 6,
    ingredients: [
      "1 kg carrots, grated",
      "1 liter full-fat milk",
      "1/2 cup ghee",
      "1 cup sugar",
      "1/4 cup mixed nuts (almonds, pistachios)",
      "1/2 tsp cardamom powder",
      "Saffron strands (optional)"
    ],
    instructions: [
      "In a heavy-bottomed pan, cook grated carrots and milk until milk reduces completely.",
      "Add ghee and continue cooking on medium heat.",
      "Add sugar and cardamom powder, cook until mixture thickens.",
      "Garnish with nuts and serve hot."
    ]
  },
  {
    name: "Sarson Ka Saag",
    image: "https://i.pinimg.com/236x/2a/ae/83/2aae834323edc03eded3a6c3e629ba1b.jpg",
    chef: "Chef Raj",
    prepTime: "60 mins",
    slug: "sarson-ka-saag",
    servings: 4,
    ingredients: [
      "500g mustard greens, chopped",
      "250g spinach, chopped",
      "2 onions, chopped",
      "2 tomatoes, chopped",
      "2 tbsp ginger-garlic paste",
      "Ghee for tempering",
      "Spices (red chili, garam masala)",
      "Makki ki roti to serve"
    ],
    instructions: [
      "Pressure cook mustard greens and spinach until soft.",
      "Blend to a coarse paste.",
      "Prepare tempering with ghee, onions, tomatoes, and spices.",
      "Mix with greens paste and simmer.",
      "Serve hot with makki ki roti and butter."
    ]
  },
  {
    name: "Sweet Potato Chaat",
    image: "https://i.pinimg.com/236x/15/57/d9/1557d9ff6c4643fae91400a8700880d3.jpg",
    chef: "Chef Anita",
    prepTime: "30 mins",
    slug: "sweet-potato-chaat",
    servings: 4,
    ingredients: [
      "4 sweet potatoes, boiled and cubed",
      "1 cup mixed sprouts",
      "Chaat masala to taste",
      "Tamarind chutney",
      "Mint chutney",
      "Roasted peanuts",
      "Fresh coriander",
      "Sev for garnish"
    ],
    instructions: [
      "Arrange sweet potato cubes in a serving dish.",
      "Top with sprouts and both chutneys.",
      "Sprinkle chaat masala and roasted peanuts.",
      "Garnish with coriander and sev.",
      "Serve immediately while warm."
    ]
  },
  {
    name: "Methi Thepla",
    image: "https://i.pinimg.com/236x/ee/18/dd/ee18ddbd952e167606ace8e7d78b5c5a.jpg",
    chef: "Chef Neeta",
    prepTime: "30 mins",
    slug: "methi-thepla",
    servings: 4,
    ingredients: [
      "2 cups whole wheat flour",
      "1 cup fresh fenugreek leaves, chopped",
      "1/2 cup yogurt",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp cumin seeds",
      "Salt to taste",
      "Oil for cooking"
    ],
    instructions: [
      "Mix all ingredients to form a soft dough.",
      "Divide into small balls and roll out into thin circles.",
      "Cook on a hot griddle with a little oil until golden brown on both sides.",
      "Serve hot with yogurt or pickle."
    ]
  },
  {
    name: "Peanut Gur Chikki",
    image: "https://i.pinimg.com/474x/f4/c5/ba/f4c5ba744d568a7f9edaf04d18891c07.jpg",
    chef: "Chef Suresh",
    prepTime: "40 mins",
    slug: "peanut-gur-chikki",
    servings: 8,
    ingredients: [
      "2 cups roasted peanuts",
      "2 cups jaggery (gur)",
      "1 tsp ghee",
      "1/2 tsp cardamom powder",
      "Sesame seeds (optional)"
    ],
    instructions: [
      "Coarsely crush roasted peanuts.",
      "Melt jaggery in a pan until right consistency.",
      "Mix in peanuts and cardamom powder.",
      "Spread on greased surface and cut while warm.",
      "Let cool completely before storing."
    ]
  }
];