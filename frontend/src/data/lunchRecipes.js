const lunchRecipes = [
  {
    name: "Chicken Caesar Salad",
    image: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMENhZXNhciUyMFNhbGFkfGVufDB8fDB8fHww",
    time: "20 min",
    servings: 2,
    rating: 4.6,
    description: "A classic Caesar salad with grilled chicken, crisp romaine lettuce, croutons, and a tangy Caesar dressing.",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "1 head of romaine lettuce, chopped",
      "1 cup croutons",
      "1/2 cup shredded Parmesan cheese",
      "Caesar dressing"
    ],
    instructions: [
      "Grill or pan-sear the chicken breasts until cooked through.",
      "Chop the romaine lettuce and place it in a large salad bowl.",
      "Top the lettuce with the grilled chicken, croutons, and shredded Parmesan cheese.",
      "Drizzle the Caesar dressing over the salad and toss to combine."
    ]
  },
  {
    name: "Grilled Cheese Sandwich",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JpbGxlZCUyMENoZWVzZSUyMFNhbmR3aWNofGVufDB8fDB8fHww",
    time: "10 min",
    servings: 1,
    rating: 4.3,
    description: "A simple and satisfying grilled cheese sandwich with crispy golden bread and melted cheese.",
    ingredients: [
      "2 slices of bread",
      "2 slices of cheese (cheddar, American, or your choice)",
      "1-2 tbsp butter"
    ],
    instructions: [
      "Heat a skillet over medium heat.",
      "Butter one side of each slice of bread.",
      "Place one slice of bread, buttered side down, on the skillet, and add the cheese slices on top.",
      "Place the second slice of bread on top, buttered side up.",
      "Cook until the bread is golden brown and the cheese is melted, flipping once.",
      "Serve immediately."
    ]
  },
  {
    name: "Tomato Basil Soup",
    image: "https://images.unsplash.com/photo-1620418025834-f4379baf1de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VG9tYXRvJTIwQmFzaWwlMjBTb3VwfGVufDB8fDB8fHww",
    time: "30 min",
    servings: 4,
    rating: 4.7,
    description: "A comforting and flavorful tomato soup with fresh basil, perfect for pairing with a grilled cheese sandwich.",
    ingredients: [
      "4 cups ripe tomatoes, chopped",
      "1 small onion, chopped",
      "2 cloves garlic, minced",
      "4 cups vegetable broth",
      "1/4 cup fresh basil leaves, chopped",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "1/4 cup heavy cream (optional)"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat. Sauté the onions and garlic until soft and fragrant.",
      "Add the chopped tomatoes and cook for about 10 minutes until they break down.",
      "Pour in the vegetable broth and bring the mixture to a simmer. Cook for 15 minutes.",
      "Use an immersion blender to puree the soup until smooth. If you don't have an immersion blender, carefully transfer the soup to a blender and blend in batches.",
      "Stir in the fresh basil and season with salt and pepper to taste.",
      "For a creamier soup, stir in the heavy cream before serving."
    ]
  },
  {
    name: "BLT Sandwich",
    image: "https://images.unsplash.com/photo-1705537238393-86337520ef8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QkxUJTIwU2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
    time: "15 min",
    servings: 1,
    rating: 4.5,
    description: "A classic BLT sandwich with crispy bacon, fresh lettuce, and juicy tomatoes on toasted bread.",
    ingredients: [
      "2 slices of bread, toasted",
      "4 slices of bacon, cooked until crispy",
      "1 large tomato, sliced",
      "2 leaves of lettuce",
      "2 tbsp mayonnaise",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Spread mayonnaise on one side of each slice of toasted bread.",
      "Layer the bacon, tomato slices, and lettuce on one slice of bread.",
      "Season the tomatoes with salt and pepper.",
      "Top with the second slice of bread, mayonnaise side down.",
      "Cut the sandwich in half and serve."
    ]
  },
  {
    name: "Quinoa Salad",
    image: "https://plus.unsplash.com/premium_photo-1704989937441-68b6536e6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UXVpbm9hJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D",
    time: "25 min",
    servings: 2,
    rating: 4.4,
    description: "A healthy and refreshing quinoa salad with fresh vegetables, feta cheese, and a lemon vinaigrette.",
    ingredients: [
      "1 cup quinoa",
      "2 cups water or vegetable broth",
      "1 cucumber, diced",
      "1 bell pepper, diced",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "Juice of 1 lemon",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Rinse the quinoa under cold water. In a pot, combine quinoa and water or broth, and bring to a boil.",
      "Reduce heat to low, cover, and simmer for 15 minutes until the water is absorbed.",
      "Fluff the quinoa with a fork and let it cool slightly.",
      "In a large bowl, combine the cooked quinoa, cucumber, bell pepper, cherry tomatoes, feta cheese, and parsley.",
      "In a small bowl, whisk together the lemon juice, olive oil, salt, and pepper.",
      "Pour the dressing over the salad and toss to combine. Serve chilled or at room temperature."
    ]
  },
  {
    name: "Turkey Avocado Wrap",
    image: "https://plus.unsplash.com/premium_photo-1664478244517-513dc18af854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXZvY2FkbyUyMFdyYXB8ZW58MHx8MHx8fDA%3D",
    time: "15 min",
    servings: 1,
    rating: 4.6,
    description: "A quick and healthy wrap filled with sliced turkey, creamy avocado, lettuce, and tomato.",
    ingredients: [
      "1 large tortilla or wrap",
      "4 slices of turkey breast",
      "1/2 avocado, sliced",
      "1 small tomato, sliced",
      "2 leaves of lettuce",
      "1 tbsp mayonnaise or mustard",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Spread mayonnaise or mustard on the tortilla.",
      "Layer the turkey slices, avocado, tomato, and lettuce on the tortilla.",
      "Season with salt and pepper.",
      "Roll the tortilla tightly into a wrap, folding in the sides as you go.",
      "Slice in half and serve."
    ]
  },
  // Italian Cuisine
  {
    name: "Margherita Pizza",
    image: "https://images.pexels.com/photos/18431672/pexels-photo-18431672/free-photo-of-pizza-margherita-cut-in-four.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "30 min",
    servings: 2,
    rating: 4.8,
    description: "A classic Margherita pizza with a thin crust, fresh tomato sauce, mozzarella cheese, and basil leaves.",
    ingredients: [
      "1 pizza dough (store-bought or homemade)",
      "1/2 cup tomato sauce",
      "8 oz fresh mozzarella, sliced",
      "1/4 cup fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat your oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface and transfer it to a baking sheet.",
      "Spread the tomato sauce evenly over the dough.",
      "Top with sliced mozzarella and season with salt and pepper.",
      "Drizzle with olive oil and bake for 10-12 minutes until the crust is golden and the cheese is bubbly.",
      "Top with fresh basil leaves before serving."
    ]
  },
  {
    name: "Caprese Salad",
    image: "https://images.pexels.com/photos/15735983/pexels-photo-15735983/free-photo-of-caprese-salad-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "15 min",
    servings: 2,
    rating: 4.7,
    description: "A refreshing Italian salad with ripe tomatoes, fresh mozzarella, basil, and a drizzle of balsamic glaze.",
    ingredients: [
      "2 large ripe tomatoes, sliced",
      "8 oz fresh mozzarella, sliced",
      "1/4 cup fresh basil leaves",
      "2 tbsp extra virgin olive oil",
      "1 tbsp balsamic glaze",
      "Salt and pepper to taste"
    ],
    instructions: [
      "On a platter, arrange alternating slices of tomatoes and mozzarella.",
      "Tuck basil leaves between the slices.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with salt and pepper to taste.",
      "Serve immediately."
    ]
  },

  // Mexican Cuisine
  {
    name: "Chicken Quesadilla",
    image: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "20 min",
    servings: 2,
    rating: 4.6,
    description: "A crispy chicken quesadilla filled with melted cheese, grilled chicken, and flavorful spices.",
    ingredients: [
      "2 large flour tortillas",
      "1 cup cooked chicken, shredded",
      "1 cup shredded cheddar cheese",
      "1/2 cup salsa",
      "1/4 cup chopped onions",
      "1/4 cup chopped bell peppers",
      "1 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat olive oil in a pan over medium heat. Sauté the onions and bell peppers until soft.",
      "Add the shredded chicken and salsa, and cook for a few minutes until heated through.",
      "Place one tortilla in a clean, hot skillet. Sprinkle half of the cheese over the tortilla.",
      "Add the chicken mixture on top of the cheese, and then sprinkle the remaining cheese over the chicken.",
      "Top with the second tortilla and cook until the bottom tortilla is golden brown, then flip and cook the other side.",
      "Remove from heat and slice into wedges. Serve with sour cream or guacamole."
    ]
  },
  {
    name: "Mexican Street Corn Salad",
    image: "https://images.pexels.com/photos/15434301/pexels-photo-15434301/free-photo-of-guacamole-and-tacos-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "15 min",
    servings: 4,
    rating: 4.9,
    description: "A vibrant salad with grilled corn, cotija cheese, lime juice, and spices, inspired by Mexican street corn.",
    ingredients: [
      "4 ears of corn, grilled and kernels removed",
      "1/4 cup mayonnaise",
      "1/4 cup crumbled cotija cheese",
      "1/4 cup fresh cilantro, chopped",
      "Juice of 1 lime",
      "1/2 tsp chili powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine the grilled corn kernels, mayonnaise, cotija cheese, cilantro, lime juice, chili powder, salt, and pepper.",
      "Mix well to combine all the flavors.",
      "Serve chilled or at room temperature, garnished with extra cheese and cilantro."
    ]
  },

  // Indian Cuisine
  {
    name: "Paneer Tikka Wrap",
    image: "https://images.pexels.com/photos/12123661/pexels-photo-12123661.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "30 min",
    servings: 2,
    rating: 4.8,
    description: "A flavorful Indian wrap filled with grilled paneer tikka, fresh vegetables, and mint chutney.",
    ingredients: [
      "200g paneer, cubed",
      "1/2 cup yogurt",
      "1 tbsp tikka masala",
      "1/2 tsp turmeric",
      "1/2 tsp cumin",
      "1/2 tsp chili powder",
      "1 tbsp lemon juice",
      "2 large tortillas or wraps",
      "1/2 cup sliced onions",
      "1/2 cup sliced bell peppers",
      "1/4 cup mint chutney",
      "Salt to taste"
    ],
    instructions: [
      "In a bowl, marinate the paneer cubes with yogurt, tikka masala, turmeric, cumin, chili powder, lemon juice, and salt. Let it sit for 15-20 minutes.",
      "Grill or pan-fry the marinated paneer until golden and slightly charred.",
      "In the same pan, sauté the onions and bell peppers until soft.",
      "Warm the tortillas and spread a layer of mint chutney on each.",
      "Add the grilled paneer and sautéed vegetables, and roll the tortillas tightly into wraps.",
      "Slice in half and serve with extra chutney."
    ]
  },
  {
    name: "Chana Masala",
    image: "https://images.pexels.com/photos/9287032/pexels-photo-9287032.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "35 min",
    servings: 4,
    rating: 4.7,
    description: "A hearty and spicy chickpea curry cooked in a tomato-based sauce with Indian spices.",
    ingredients: [
      "2 cups cooked chickpeas (or 1 can, drained and rinsed)",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 tomatoes, chopped",
      "1 tsp cumin seeds",
      "1 tsp turmeric",
      "1 tsp coriander powder",
      "1 tsp garam masala",
      "1/2 tsp chili powder",
      "1 tbsp oil",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Heat oil in a pan and add cumin seeds. Once they start to sizzle, add the chopped onions, garlic, and ginger. Sauté until golden brown.",
      "Add the tomatoes and cook until they break down and form a thick sauce.",
      "Stir in the turmeric, coriander powder, garam masala, chili powder, and salt.",
      "Add the cooked chickpeas and stir to coat them in the spice mixture.",
      "Simmer for 15-20 minutes, adding water as needed to achieve the desired consistency.",
      "Garnish with fresh cilantro and serve with rice or naan."
    ]
  },

  // Mediterranean Cuisine
  {
    name: "Greek Salad",
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "15 min",
    servings: 2,
    rating: 4.5,
    description: "A light and refreshing salad with cucumbers, tomatoes, olives, feta cheese, and a lemon-oregano dressing.",
    ingredients: [
      "1 cucumber, sliced",
      "2 tomatoes, chopped",
      "1/2 cup Kalamata olives",
      "1/4 red onion, thinly sliced",
      "1/4 cup crumbled feta cheese",
      "1/4 cup extra virgin olive oil",
      "Juice of 1 lemon",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine the cucumber, tomatoes, olives, red onion, and feta cheese.",
      "In a small bowl, whisk together the olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour the dressing over the salad and toss to combine.",
      "Serve chilled or at room temperature."
    ]
  },
  {
    name: "Falafel Pita Sandwich",
    image: "https://images.pexels.com/photos/17429550/pexels-photo-17429550/free-photo-of-pita-sandwich-set-on-plate-next-to-glass-of-orange-juice.jpeg?auto=compress&cs=tinysrgb&w=600",
    time: "40 min",
    servings: 4,
    rating: 4.7,
    description: "A Middle Eastern sandwich with crispy falafel, fresh veggies, and tahini sauce stuffed in a pita pocket.",
    ingredients: [
      "8 falafel balls (store-bought or homemade)",
      "4 pita breads",
      "1 cup shredded lettuce",
      "1/2 cup diced tomatoes",
      "1/2 cup sliced cucumbers",
      "1/4 cup tahini sauce",
      "1/4 cup pickled turnips (optional)",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Warm the pita breads in a dry skillet or oven.",
      "Cut the pita breads in half and open the pockets.",
      "Stuff each pita pocket with 2 falafel balls, shredded lettuce, diced tomatoes, sliced cucumbers, and pickled turnips if using.",
      "Drizzle with tahini sauce and serve immediately."
    ]
  }
];

export default lunchRecipes;
