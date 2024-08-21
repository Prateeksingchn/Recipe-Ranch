const breakfastRecipes = [
  {
    name: "Avocado Toast with Poached Egg",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2FkbyUyMHRvYXN0fGVufDB8MHwwfHx8MA%3D%3D",
    time: "15 min",
    servings: 2,
    rating: 4.8,
    description: "Toasted bread topped with creamy avocado and a perfectly poached egg, making for a delightful and nutritious breakfast.",
    ingredients: [
      "2 slices of whole-grain bread",
      "1 ripe avocado, mashed",
      "2 eggs",
      "Salt and pepper to taste",
      "Lemon juice (optional)"
    ],
    instructions: [
      "Toast the bread until golden brown.",
      "Poach the eggs in simmering water until the whites are set but the yolks are still runny.",
      "Spread the mashed avocado evenly over the toasted bread.",
      "Top each slice with a poached egg.",
      "Season with salt, pepper, and a squeeze of lemon juice (if desired).",
      "Serve immediately and enjoy!"
    ]
  },
  {
    name: "Blueberry Pancakes",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5JTIwcGFuY2FrZXN8ZW58MHwwfDB8fHww",
    time: "20 min",
    servings: 4,
    rating: 4.5,
    description: "Fluffy pancakes dotted with juicy blueberries, perfect for a leisurely weekend breakfast.",
    ingredients: [
      "1 cup all-purpose flour",
      "2 teaspoons baking powder",
      "1 tablespoon sugar",
      "1/4 teaspoon salt",
      "1 egg",
      "1 cup milk",
      "2 tablespoons melted butter",
      "1 cup fresh or frozen blueberries"
    ],
    instructions: [
      "In a large bowl, whisk together the flour, baking powder, sugar, and salt.",
      "In a separate bowl, beat the egg, then stir in the milk and melted butter.",
      "Pour the wet ingredients into the dry ingredients and stir just until combined (do not overmix).",
      "Fold in the blueberries.",
      "Heat a lightly oiled griddle or nonstick pan over medium heat.",
      "Scoop the batter onto the griddle, forming pancakes about 4 inches in diameter.",
      "Cook until bubbles appear on the surface, then flip and cook until golden brown on the other side.",
      "Serve the pancakes warm, with your favorite toppings like maple syrup, whipped cream, or additional fresh blueberries."
    ]
  },
  {
    name: "Greek Yogurt Parfait",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ndXJ0JTIwcGFyZmFpdHxlbnwwfDB8MHx8fDA%3D",
    time: "10 min",
    servings: 1,
    rating: 4.2,
    description: "A refreshing and nutritious parfait made with layers of Greek yogurt, fresh fruits, and granola.",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries (blueberries, strawberries, raspberries)",
      "Honey (optional)"
    ],
    instructions: [
      "In a glass or bowl, layer half of the Greek yogurt.",
      "Add a layer of mixed berries and granola.",
      "Top with the remaining Greek yogurt, more berries, and granola.",
      "Drizzle with honey if desired.",
      "Serve immediately."
    ]
  },
  {
    name: "Spinach and Mushroom Omelette",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b21lbGV0dGV8ZW58MHwwfDB8fHww",
    time: "15 min",
    servings: 2,
    rating: 4.6,
    description: "A fluffy omelette filled with sautéed spinach and mushrooms, ideal for a healthy breakfast.",
    ingredients: [
      "4 eggs",
      "1/2 cup fresh spinach",
      "1/2 cup sliced mushrooms",
      "Salt and pepper to taste",
      "1 tablespoon olive oil"
    ],
    instructions: [
      "Heat olive oil in a pan over medium heat.",
      "Add mushrooms and sauté until golden brown.",
      "Add spinach and cook until wilted.",
      "Whisk the eggs with salt and pepper, then pour over the vegetables.",
      "Cook until the eggs are set, then fold the omelette in half.",
      "Serve hot."
    ]
  },
  {
    name: "Breakfast Burrito",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0JTIwYnVycml0b3xlbnwwfDB8MHx8fDA%3D",
    time: "25 min",
    servings: 2,
    rating: 4.7,
    description: "A hearty burrito filled with scrambled eggs, cheese, and your choice of fillings, wrapped in a warm tortilla.",
    ingredients: [
      "4 large eggs",
      "1/2 cup shredded cheese",
      "2 flour tortillas",
      "1/4 cup salsa",
      "1/2 cup cooked breakfast sausage or bacon",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Scramble the eggs in a pan over medium heat.",
      "Add salt, pepper, and cheese, stirring until melted.",
      "Warm the tortillas in a separate pan or microwave.",
      "Place the eggs, sausage or bacon, and salsa in the center of each tortilla.",
      "Fold the sides of the tortilla inwards, then roll it up to form a burrito.",
      "Serve hot."
    ]
  },
  {
    name: "Acai Bowl",
    image: "https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "15 min",
    servings: 1,
    rating: 4.4,
    description: "A vibrant and refreshing acai bowl topped with fresh fruits, granola, and seeds.",
    ingredients: [
      "1 packet frozen acai puree",
      "1/2 banana",
      "1/2 cup mixed berries",
      "1/4 cup granola",
      "1 tablespoon chia seeds",
      "Honey (optional)"
    ],
    instructions: [
      "Blend the acai puree with banana and a small amount of water or juice until smooth.",
      "Pour the acai mixture into a bowl.",
      "Top with mixed berries, granola, and chia seeds.",
      "Drizzle with honey if desired.",
      "Serve immediately."
    ]
  },
  {
    name: "Croissant Breakfast Sandwich",
    image: "https://images.pexels.com/photos/8765341/pexels-photo-8765341.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "20 min",
    servings: 2,
    rating: 4.7,
    description: "A flaky croissant sandwich filled with scrambled eggs, ham, and cheese, perfect for a French-inspired breakfast.",
    ingredients: [
      "2 croissants, sliced in half",
      "4 large eggs",
      "2 slices of ham",
      "2 slices of cheese",
      "Salt and pepper to taste",
      "1 tablespoon butter"
    ],
    instructions: [
      "In a pan, melt butter over medium heat.",
      "Whisk the eggs with salt and pepper, then scramble them in the pan until just set.",
      "Warm the croissants in the oven or microwave.",
      "Assemble the sandwiches by layering ham, scrambled eggs, and cheese inside the croissant halves.",
      "Serve warm."
    ]
  },
  {
    name: "French Toast with Berries",
    image: "https://images.pexels.com/photos/5591726/pexels-photo-5591726.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "25 min",
    servings: 4,
    rating: 4.9,
    description: "Classic French toast served with fresh berries and a drizzle of maple syrup, making for a sweet and indulgent breakfast.",
    ingredients: [
      "4 slices of brioche or challah bread",
      "2 large eggs",
      "1/2 cup milk",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon ground cinnamon",
      "Butter for frying",
      "Fresh berries and maple syrup for serving"
    ],
    instructions: [
      "Whisk together eggs, milk, vanilla, and cinnamon in a shallow dish.",
      "Dip each slice of bread into the mixture, coating both sides.",
      "Heat butter in a pan over medium heat.",
      "Cook the bread slices until golden brown on both sides.",
      "Serve with fresh berries and maple syrup."
    ]
  },

  // Japanese Cuisine
  {
    name: "Tamago Sando (Japanese Egg Sandwich)",
    image: "https://images.pexels.com/photos/7936730/pexels-photo-7936730.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "10 min",
    servings: 2,
    rating: 4.8,
    description: "A simple and delicious Japanese egg salad sandwich, often made with fluffy white bread and creamy egg filling.",
    ingredients: [
      "4 slices of white bread",
      "4 large eggs",
      "2 tablespoons mayonnaise",
      "Salt and pepper to taste",
      "1 tablespoon unsalted butter"
    ],
    instructions: [
      "Boil the eggs for about 10 minutes, then peel and mash them in a bowl.",
      "Mix the mashed eggs with mayonnaise, salt, and pepper.",
      "Butter the bread slices on one side.",
      "Spread the egg mixture on two slices of bread, then top with the remaining slices.",
      "Cut off the crusts and slice each sandwich in half."
    ]
  },
  {
    name: "Onigiri (Japanese Rice Balls)",
    image: "https://images.unsplash.com/photo-1593344109304-607d01353135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25pZ2lyaXxlbnwwfHwwfHx8MA%3D%3D",
    time: "30 min",
    servings: 4,
    rating: 4.6,
    description: "Traditional Japanese rice balls, often filled with pickled plums, salmon, or other savory fillings, and wrapped in seaweed.",
    ingredients: [
      "2 cups short-grain sushi rice",
      "2 1/2 cups water",
      "1/2 teaspoon salt",
      "Filling of choice (e.g., pickled plum, cooked salmon, tuna with mayonnaise)",
      "Nori (seaweed sheets) for wrapping"
    ],
    instructions: [
      "Cook the rice in water according to package instructions.",
      "Once the rice is cooked, let it cool slightly and season with salt.",
      "Wet your hands with water, then take a handful of rice and form it into a ball or triangle shape.",
      "Make a small indent in the center of the rice ball and add your filling.",
      "Cover the filling with more rice and reshape the onigiri.",
      "Wrap each onigiri with a strip of nori and serve."
    ]
  },

  // Mexican Cuisine
  {
    name: "Huevos Rancheros",
    image: "https://plus.unsplash.com/premium_photo-1681406689584-2f7612fa98a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    time: "25 min",
    servings: 4,
    rating: 4.7,
    description: "A traditional Mexican breakfast dish featuring fried eggs served on corn tortillas topped with a tomato-chili sauce.",
    ingredients: [
      "4 corn tortillas",
      "4 large eggs",
      "1 cup black beans, cooked",
      "1 cup salsa or tomato-chili sauce",
      "1/4 cup crumbled queso fresco",
      "1 avocado, sliced",
      "Salt and pepper to taste",
      "Cilantro for garnish"
    ],
    instructions: [
      "Heat the tortillas in a dry skillet until warmed through.",
      "Fry the eggs in a separate pan to your desired doneness.",
      "Place each egg on a tortilla and top with black beans and salsa.",
      "Sprinkle with queso fresco, avocado slices, and cilantro.",
      "Serve immediately."
    ]
  },

  {
    name: "Chilaquiles",
    image: "https://images.unsplash.com/photo-1653067406276-56e0c78e2984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpbGFxdWlsZXN8ZW58MHx8MHx8fDA%3D",
    time: "30 min",
    servings: 4,
    rating: 4.9,
    description: "A popular Mexican breakfast dish made with fried tortilla chips simmered in salsa, topped with cheese, eggs, and other toppings.",
    ingredients: [
      "8 corn tortillas, cut into wedges",
      "1 cup red or green salsa",
      "1/2 cup crumbled queso fresco or feta cheese",
      "4 large eggs",
      "1/4 cup sour cream",
      "1 avocado, sliced",
      "Salt and pepper to taste",
      "Cilantro for garnish"
    ],
    instructions: [
      "Fry the tortilla wedges in oil until crispy, then drain on paper towels.",
      "In a large pan, heat the salsa until simmering, then add the tortilla chips and toss to coat.",
      "Fry the eggs in a separate pan to your liking.",
      "Serve the chilaquiles topped with cheese, eggs, sour cream, avocado, and cilantro."
    ]
  },

  // Italian Cuisine
  {
    name: "Frittata with Spinach and Ricotta",
    image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "20 min",
    servings: 4,
    rating: 4.7,
    description: "An Italian-style omelette filled with spinach and ricotta, perfect for a light and healthy breakfast.",
    ingredients: [
      "6 large eggs",
      "1/2 cup ricotta cheese",
      "1 cup fresh spinach, chopped",
      "1/4 cup grated Parmesan cheese",
      "Salt and pepper to taste",
      "1 tablespoon olive oil"
    ],
    instructions: [
      "Preheat your oven to 375°F (190°C).",
      "In a bowl, whisk together the eggs, ricotta, Parmesan, salt, and pepper.",
      "Heat the olive oil in an oven-safe skillet over medium heat.",
      "Add the spinach and cook until wilted.",
      "Pour the egg mixture over the spinach and cook for a few minutes until the edges start to set.",
      "Transfer the skillet to the oven and bake for 10-12 minutes until the frittata is fully set.",
      "Slice and serve."
    ]
  },
  {
    name: "Pancetta and Egg Breakfast Pizza",
    image: "https://plus.unsplash.com/premium_photo-1668095398258-a204bb6d2204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGFuY2V0dGElMjBhbmQlMjBFZ2clMjBCcmVha2Zhc3QlMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
    time: "30 min",
    servings: 4,
    rating: 4.8,
    description: "A delicious breakfast pizza topped with crispy pancetta, eggs, and a sprinkle of Parmesan cheese.",
    ingredients: [
      "1 pre-made pizza dough",
      "1/2 cup marinara sauce",
      "4 large eggs",
      "1/2 cup shredded mozzarella cheese",
      "1/4 cup grated Parmesan cheese",
      "4 slices pancetta",
      "Salt and pepper to taste",
      "Fresh basil leaves for garnish"
    ],
    instructions: [
      "Preheat your oven to 425°F (220°C).",
      "Roll out the pizza dough on a floured surface and transfer it to a baking sheet.",
      "Spread the marinara sauce over the dough, then sprinkle with mozzarella.",
      "Arrange the pancetta slices on top.",
      "Crack the eggs onto the pizza, spacing them out evenly.",
      "Season with salt and pepper, then bake for 12-15 minutes until the eggs are set and the crust is golden.",
      "Garnish with Parmesan and fresh basil before serving."
    ]
  }
];

export default breakfastRecipes;
