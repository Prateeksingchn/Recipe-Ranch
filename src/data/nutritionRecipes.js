const nutritionRecipes = [
    {
      id: 1,
      title: "Creamy Garlic Pasta",
      chef: "Chef Isabella",
      views: 18000,
      time: 30,
      category: "Italian",
      image: "pasta2.jpg",
      description: "A rich and creamy pasta dish infused with the robust flavor of garlic, topped with Parmesan cheese and fresh parsley for a comforting meal.",
      ingredients: [
        "400g fettuccine pasta",
        "4 cloves garlic, minced",
        "1/4 cup olive oil",
        "1/4 cup heavy cream",
        "1/2 cup grated Parmesan cheese",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
      ],
      instructions: [
        "Cook the pasta according to package instructions. Reserve 1 cup of pasta water before draining.",
        "In a large pan, sauté minced garlic in olive oil over medium heat until fragrant.",
        "Add cooked pasta to the pan and toss with garlic and oil.",
        "Pour in heavy cream and add grated Parmesan. Toss until the pasta is well coated.",
        "If the sauce is too thick, add some reserved pasta water to reach desired consistency.",
        "Season with salt and pepper to taste.",
        "Garnish with fresh parsley before serving."
      ]
    },
    {
      id: 2,
      title: "Chicken Biryani",
      chef: "Chef Rahul",
      views: 15000,
      time: 60,
      category: "Indian",
      image: "biryani.png",
      description: "Aromatic basmati rice layered with tender chicken, spiced with traditional Indian flavors, and cooked to perfection, creating a fragrant and flavorful dish.",
      ingredients: [
        "500g basmati rice",
        "500g chicken, cut into pieces",
        "2 onions, sliced",
        "2 tbsp ginger-garlic paste",
        "2 tbsp biryani masala",
        "1/2 cup yogurt",
        "Saffron strands soaked in milk",
        "Ghee and oil for cooking",
        "Salt to taste"
      ],
      instructions: [
        "Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 30 minutes.",
        "Cook rice until 70% done and set aside.",
        "In a large pot, fry sliced onions until golden brown.",
        "Add marinated chicken and cook until it's nearly done.",
        "Layer half of the par-cooked rice over the chicken.",
        "Sprinkle saffron milk and ghee over the rice.",
        "Add the remaining rice as the top layer.",
        "Cover and cook on low heat for 20-25 minutes until the rice is fully cooked and fragrant.",
        "Gently mix the layers before serving."
      ]
    },
    {
      id: 3,
      title: "Fluffy Blueberry Pancakes",
      chef: "Chef Emma",
      views: 12000,
      time: 20,
      category: "Breakfast",
      image: "pancake3.png",
      description: "Light and airy pancakes filled with juicy blueberries, perfect for a quick and delicious breakfast treat.",
      ingredients: [
        "1 cup all-purpose flour",
        "1 tbsp sugar",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "1/4 tsp salt",
        "1 cup buttermilk",
        "1 large egg",
        "2 tbsp melted butter",
        "1 cup fresh or frozen blueberries"
      ],
      instructions: [
        "In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.",
        "In another bowl, whisk together buttermilk, egg, and melted butter.",
        "Pour the wet ingredients into the dry ingredients and stir just until combined (do not overmix).",
        "Gently fold in the blueberries.",
        "Heat a non-stick pan over medium heat and lightly grease it.",
        "Pour 1/4 cup of batter onto the pan and cook until bubbles form on the surface, then flip and cook until golden brown.",
        "Serve with maple syrup and extra blueberries."
      ]
    },
    {
      id: 4,
      title: "Classic Margherita Pizza",
      chef: "Chef Marco",
      views: 20000,
      time: 45,
      category: "Italian",
      image: "margheritaPizza.png",
      description: "A traditional Italian pizza with a crispy crust, fresh tomato sauce, creamy mozzarella, and fragrant basil leaves.",
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
      id: 5,
      title: "Chocolate Cake",
      chef: "Chef Sophia",
      views: 22000,
      time: 90,
      category: "Dessert",
      image: "cake2.webp",
      description: "A rich and moist chocolate cake that's perfect for satisfying your sweet tooth, topped with a creamy frosting.",
      ingredients: [
        "1 3/4 cups all-purpose flour",
        "3/4 cup unsweetened cocoa powder",
        "1 1/2 tsp baking powder",
        "1 1/2 tsp baking soda",
        "1 tsp salt",
        "2 cups sugar",
        "2 large eggs",
        "1 cup whole milk",
        "1/2 cup vegetable oil",
        "2 tsp vanilla extract",
        "1 cup boiling water"
      ],
      instructions: [
        "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
        "In a large bowl, stir together flour, cocoa powder, baking powder, baking soda, and salt.",
        "Add sugar, eggs, milk, oil, and vanilla. Beat on medium speed for 2 minutes.",
        "Stir in boiling water (batter will be thin).",
        "Pour batter into prepared pans and bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.",
        "Cool in pans for 10 minutes, then remove to wire racks to cool completely.",
        "Frost with your favorite frosting and serve."
      ]
    },
    {
      id: 6,
      title: "Chole Bhature",
      chef: "Chef Amit",
      views: 17000,
      time: 75,
      category: "Indian",
      image: "choleBhature.jpg",
      description: "A popular North Indian dish featuring spicy chickpeas served with fluffy, deep-fried bhature, ideal for a hearty meal.",
      ingredients: [
        "2 cups chickpeas, soaked overnight",
        "2 onions, finely chopped",
        "2 tomatoes, pureed",
        "2 tbsp ginger-garlic paste",
        "1 tsp cumin seeds",
        "2 tbsp chole masala",
        "1 tsp turmeric",
        "1 tsp red chili powder",
        "Salt to taste",
        "Oil for cooking",
        "Bhature (fried bread) for serving"
      ],
      instructions: [
        "Pressure cook soaked chickpeas with salt until tender. Drain and set aside.",
        "Heat oil in a pan, add cumin seeds, and let them splutter.",
        "Add chopped onions and sauté until golden brown.",
        "Stir in ginger-garlic paste and cook for a few minutes.",
        "Add tomato puree, turmeric, red chili powder, and chole masala. Cook until oil separates.",
        "Add the cooked chickpeas and mix well. Simmer for 15-20 minutes.",
        "Serve hot with bhature, garnished with chopped onions and cilantro."
      ]
    }
  ];
  
  export default nutritionRecipes;
  