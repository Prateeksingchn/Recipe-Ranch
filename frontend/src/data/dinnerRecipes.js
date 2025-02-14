const dinnerRecipes = [
  {
    name: "Grilled Salmon with Quinoa",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60",
    time: "30",
    servings: 2,
    rating: 4.7,
    description: "Tender grilled salmon fillet served over a bed of fluffy quinoa, making for a healthy and delicious dinner.",
    ingredients: [
      "2 salmon fillets",
      "1 cup quinoa",
      "1 cup vegetable broth",
      "1 lemon, juiced",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat the grill to medium-high heat.",
      "Season the salmon fillets with salt and pepper.",
      "Grill the salmon for 8-10 minutes per side, or until the fish flakes easily with a fork.",
      "Meanwhile, cook the quinoa according to package instructions, using the vegetable broth instead of water.",
      "Fluff the cooked quinoa with a fork and stir in the lemon juice and olive oil.",
      "Serve the grilled salmon over the quinoa, garnishing with lemon wedges if desired."
    ]
  },
  {
    name: "Spaghetti Carbonara",
    image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "25",
    servings: 4,
    rating: 4.8,
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper, creating a creamy and savory sauce.",
    ingredients: [
      "12 oz spaghetti",
      "4 oz pancetta, diced",
      "2 large eggs",
      "1/2 cup grated Parmesan cheese",
      "1/4 cup grated Pecorino Romano cheese",
      "Salt and black pepper to taste",
      "2 cloves garlic, minced",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Cook the spaghetti in a large pot of salted boiling water until al dente. Reserve 1/2 cup of pasta water before draining.",
      "In a pan, heat olive oil over medium heat and sauté the garlic until fragrant.",
      "Add the pancetta and cook until crispy.",
      "In a bowl, whisk together the eggs, Parmesan, Pecorino, and a generous amount of black pepper.",
      "Toss the hot spaghetti with the pancetta in the pan, then remove from heat.",
      "Quickly mix in the egg and cheese mixture, adding reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with additional cheese and pepper."
    ]
  },
  {
    name: "Roasted Chicken with Vegetables",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60",
    time: "60",
    servings: 4,
    rating: 4.9,
    description: "Juicy roasted chicken served with a medley of roasted vegetables, a perfect family dinner.",
    ingredients: [
      "1 whole chicken (about 4 lbs)",
      "4 large carrots, sliced",
      "4 potatoes, quartered",
      "2 onions, quartered",
      "4 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tbsp fresh rosemary, chopped",
      "Salt and pepper to taste",
      "1 lemon, halved"
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "Place the chicken in a roasting pan and season inside and out with salt, pepper, and rosemary.",
      "Stuff the cavity with lemon halves and half of the garlic.",
      "Toss the vegetables with olive oil, remaining garlic, salt, and pepper, and arrange around the chicken.",
      "Roast for 1 hour, or until the chicken is golden brown and the internal temperature reaches 165°F (75°C).",
      "Let the chicken rest for 10 minutes before carving. Serve with the roasted vegetables."
    ]
  },
  {
    name: "Chicken Fry",
    image: "https://plus.unsplash.com/premium_photo-1683139918895-06f8f3b9939e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMCUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
    time: "20",
    servings: 3,
    rating: 4.6,
    description: "Crispy and flavorful fried chicken, a quick and satisfying meal perfect for any day.",
    ingredients: [
      "6 chicken drumsticks",
      "1 cup buttermilk",
      "1 cup all-purpose flour",
      "1 tsp paprika",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "Salt and pepper to taste",
      "Vegetable oil for frying"
    ],
    instructions: [
      "Marinate the chicken in buttermilk for at least 1 hour, or overnight.",
      "In a bowl, mix together the flour, paprika, garlic powder, onion powder, salt, and pepper.",
      "Heat oil in a deep skillet or fryer to 350°F (175°C).",
      "Dredge the marinated chicken in the flour mixture, coating well.",
      "Fry the chicken in batches until golden brown and cooked through, about 12-15 minutes.",
      "Drain on paper towels and serve hot."
    ]
  },
  {
    name: "Vegetarian Tacos",
    image: "https://images.unsplash.com/photo-1613591797545-3ff9eba2ac34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZXRhcmlhbiUyMFRhY29zfGVufDB8fDB8fHww",
    time: "25",
    servings: 4,
    rating: 4.5,
    description: "Flavorful and healthy vegetarian tacos filled with black beans, corn, avocado, and fresh salsa.",
    ingredients: [
      "8 small corn tortillas",
      "1 can black beans, drained and rinsed",
      "1 cup corn kernels",
      "1 avocado, diced",
      "1/2 cup salsa",
      "1/4 cup chopped cilantro",
      "1/4 cup crumbled feta or queso fresco",
      "Lime wedges for serving"
    ],
    instructions: [
      "Heat the tortillas in a dry skillet or on a grill until warmed through.",
      "In a pan, heat the black beans and corn until warmed.",
      "Assemble the tacos by layering the beans and corn on the tortillas.",
      "Top with diced avocado, salsa, cilantro, and crumbled cheese.",
      "Serve with lime wedges."
    ]
  },
  {
    name: "Seafood Paella",
    image: "https://images.unsplash.com/photo-1623961990059-28356e226a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VhZm9vZCUyMFBhZWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    time: "45",
    servings: 5,
    rating: 4.8,
    description: "A traditional Spanish dish made with saffron-infused rice, fresh seafood, and vibrant vegetables.",
    ingredients: [
      "1 1/2 cups Arborio rice",
      "3 cups chicken broth",
      "1/2 tsp saffron threads",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1/2 cup chopped tomatoes",
      "1/2 lb shrimp, peeled and deveined",
      "1/2 lb mussels, cleaned",
      "1/2 lb squid, cut into rings",
      "1/2 cup frozen peas",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Lemon wedges for serving"
    ],
    instructions: [
      "In a small bowl, soak the saffron in 1/4 cup of warm water.",
      "In a large paella pan or skillet, heat olive oil over medium heat and sauté the onion and garlic until softened.",
      "Add the rice and cook, stirring, for 2 minutes.",
      "Stir in the saffron with its soaking water, chicken broth, and tomatoes. Bring to a boil, then reduce to a simmer.",
      "Cook the rice for 15 minutes, then add the shrimp, mussels, squid, and peas.",
      "Continue cooking until the seafood is cooked through and the rice is tender, about 10 minutes more.",
      "Season with salt and pepper, and serve with lemon wedges."
    ]
  },

  // Additional recipes from other cuisines...

  // Indian Cuisine
  {
    name: "Butter Chicken",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "40",
    servings: 4,
    rating: 4.9,
    description: "A rich and creamy curry made with tender chicken in a spiced tomato sauce, served with naan or rice.",
    ingredients: [
      "1 lb chicken breast, cubed",
      "1 cup tomato puree",
      "1/2 cup heavy cream",
      "1/4 cup plain yogurt",
      "2 tbsp butter",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "1 inch ginger, grated",
      "1 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp cumin",
      "1 tsp chili powder",
      "Salt to taste",
      "Cilantro for garnish"
    ],
    instructions: [
      "In a bowl, marinate the chicken with yogurt, turmeric, and salt for at least 30 minutes.",
      "Heat butter in a pan and sauté the onions until golden brown.",
      "Add the garlic, ginger, and spices, and cook for 2 minutes.",
      "Stir in the tomato puree and simmer for 10 minutes.",
      "Add the marinated chicken and cook until no longer pink.",
      "Stir in the cream and cook until the sauce thickens.",
      "Garnish with cilantro and serve with naan or rice."
    ]
  },
  {
    name: "Vegetable Biryani",
    image: "https://images.pexels.com/photos/7593230/pexels-photo-7593230.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "60",
    servings: 4,
    rating: 4.8,
    description: "A flavorful rice dish cooked with mixed vegetables, aromatic spices, and saffron, served with raita.",
    ingredients: [
      "2 cups basmati rice",
      "1 cup mixed vegetables (carrots, peas, potatoes)",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 tbsp biryani masala",
      "1/2 tsp saffron threads, soaked in 2 tbsp warm milk",
      "3 cups water or vegetable broth",
      "2 tbsp ghee or oil",
      "Salt to taste",
      "Fresh mint and cilantro for garnish"
    ],
    instructions: [
      "Wash and soak the rice in water for 20 minutes.",
      "Heat ghee in a large pot and sauté the onions until golden.",
      "Add garlic, ginger, and biryani masala, and cook for 2 minutes.",
      "Stir in the mixed vegetables and cook for 5 minutes.",
      "Add the rice, water, and salt, and bring to a boil.",
      "Reduce the heat, cover, and simmer until the rice is cooked and the liquid is absorbed.",
      "Drizzle the saffron milk over the rice and gently fluff with a fork.",
      "Garnish with fresh mint and cilantro, and serve with raita."
    ]
  },

  // Mediterranean Cuisine
  {
    name: "Greek Moussaka",
    image: "https://images.pexels.com/photos/22698519/pexels-photo-22698519/free-photo-of-close-up-of-a-slice-of-a-greek-kadayif-dessert.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "1 hr 15",
    servings: 6,
    rating: 4.7,
    description: "A layered Greek dish with eggplant, ground meat, and béchamel sauce, baked to golden perfection.",
    ingredients: [
      "2 large eggplants, sliced",
      "1 lb ground beef or lamb",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 can crushed tomatoes",
      "1/2 tsp cinnamon",
      "1/2 tsp oregano",
      "1/2 cup grated Parmesan cheese",
      "Salt and pepper to taste",
      "2 cups béchamel sauce",
      "Olive oil for frying"
    ],
    instructions: [
      "Preheat the oven to 350°F (175°C).",
      "Salt the eggplant slices and let them sit for 20 minutes to draw out moisture. Pat dry.",
      "Heat olive oil in a pan and fry the eggplant slices until golden. Set aside.",
      "In the same pan, sauté the onions and garlic until soft, then add the ground meat and cook until browned.",
      "Stir in the tomatoes, cinnamon, oregano, salt, and pepper, and simmer for 15 minutes.",
      "In a baking dish, layer the eggplant slices, meat sauce, and béchamel sauce, repeating the layers.",
      "Sprinkle the top with Parmesan cheese and bake for 45 minutes until golden brown.",
      "Let the moussaka rest for 10 minutes before serving."
    ]
  },
  {
    name: "Falafel with Tahini Sauce",
    image: "https://images.pexels.com/photos/6252745/pexels-photo-6252745.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "40",
    servings: 4,
    rating: 4.8,
    description: "Crispy chickpea fritters served with creamy tahini sauce, a popular Middle Eastern dish.",
    ingredients: [
      "1 can chickpeas, drained and rinsed",
      "1 small onion, chopped",
      "2 cloves garlic, minced",
      "1/4 cup fresh parsley, chopped",
      "1 tsp cumin",
      "1 tsp coriander",
      "1/2 tsp baking powder",
      "Salt and pepper to taste",
      "Vegetable oil for frying",
      "Tahini sauce for serving"
    ],
    instructions: [
      "In a food processor, combine chickpeas, onion, garlic, parsley, cumin, coriander, baking powder, salt, and pepper. Process until smooth.",
      "Form the mixture into small balls or patties.",
      "Heat oil in a deep skillet or fryer to 350°F (175°C).",
      "Fry the falafel in batches until golden brown and crispy, about 3-4 minutes per side.",
      "Drain on paper towels and serve with tahini sauce."
    ]
  }
];

export default dinnerRecipes;