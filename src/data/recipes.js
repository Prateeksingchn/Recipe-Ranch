const recipes = [
    {
        id: 1,
        name: "Butter Naan",
        category: "Dinner",
        subcategory: "indian", // Updated
        image: "https://images.unsplash.com/photo-1600718375227-6d3e9805879e",
        description: "Butter naan is a popular Indian flatbread made from unleavened dough. It's characterized by its soft, chewy texture and buttery flavor. It's often served with curries, kebabs, and other Indian dishes.",
        ingredients: [
            "1 cup all-purpose flour",
            "1 teaspoon instant yeast",
            "1/4 teaspoon sugar",
            "1/4 teaspoon salt",
            "1/4 cup warm water (105-115°F)",
            "2 tablespoons plain yogurt",
            "2 tablespoons melted butter",
            "2 tablespoons melted ghee (for brushing)",
            "Chopped fresh cilantro (for garnish)"
        ],
        instructions: [
            "Make the dough: In a small bowl, combine the warm water, yeast, and sugar. Let it sit for 5-10 minutes, or until the yeast is foamy.",
            "Combine ingredients: In a large bowl, whisk together the flour and salt. Add the yeast mixture, yogurt, and melted butter. Stir until a dough forms.",
            "Knead: Transfer the dough to a lightly floured surface and knead for 5-7 minutes, or until smooth and elastic.",
            "Rise: Place the dough in a greased bowl, cover, and let it rise in a warm place for 1-1.5 hours, or until doubled in size.",
            "Shape: Punch down the dough and divide it into 8 equal pieces. Roll each piece into a 6-inch oval.",
            "Cook: Heat a tawa or griddle over medium-high heat. Place one naan on the hot tawa and cook for 1-2 minutes per side, or until golden brown and puffed up.",
            "Brush and serve: Brush the cooked naan with melted ghee. Serve immediately with your favorite Indian dish."
        ],
        time: 60,
        servings: 8,
        difficulty: "Medium",
        chefName: "Chef Raj"
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        category: "Dinner",
        subcategory: "indian", // Updated
        image: "https://images.unsplash.com/photo-1600718375227-6d3e9805879e",
        description: "A popular Indian curry dish with marinated chicken in a creamy tomato sauce.",
        ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Cream", "Spices"],
        instructions: ["Marinate chicken", "Grill chicken", "Prepare sauce", "Combine chicken and sauce"],
        time: 90,
        servings: 4,
        difficulty: "Hard",
        chefName: "Chef Anil"
    },
    {
        id: 3,
        name: "Caesar Salad",
        category: "Lunch",
        subcategory: "other", // Updated
        image: "https://images.unsplash.com/photo-1571091718767-1e7c0a9e1560",
        description: "A refreshing salad with romaine lettuce, croutons, and Caesar dressing.",
        ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
        instructions: ["Wash and chop lettuce", "Prepare dressing", "Combine ingredients", "Toss salad"],
        time: 15,
        servings: 2,
        difficulty: "Easy",
        chefName: "Chef Laura"
    },
    {
        id: 4,
        name: "Chicken Tacos",
        category: "Lunch",
        subcategory: "mexican", // Updated
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        description: "Delicious chicken tacos with fresh toppings.",
        ingredients: ["Ground chicken", "Taco shells", "Lettuce", "Tomato", "Cheese"],
        instructions: ["Cook chicken", "Prepare toppings", "Assemble tacos"],
        time: 30,
        servings: 4,
        difficulty: "Easy",
        chefName: "Chef Maria"
    },
    {
        id: 5,
        name: "Vegetable Stir Fry",
        category: "Dinner",
        subcategory: "chinese", // Updated
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb9e",
        description: "A quick and healthy vegetable stir fry.",
        ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Oil"],
        instructions: ["Chop vegetables", "Heat oil", "Stir fry vegetables", "Add sauce"],
        time: 20,
        servings: 3,
        difficulty: "Easy",
        chefName: "Chef Lee"
    },
    {
        id: 6,
        name: "Margherita Pizza",
        category: "Dinner",
        subcategory: "italian", // Updated
        image: "https://images.unsplash.com/photo-1571091655789-11f98fbb3366",
        description: "A simple pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        ingredients: [
            "1 cup all-purpose flour",
            "1/4 teaspoon salt",
            "1/4 cup warm water",
            "1 tomato, sliced",
            "Fresh mozzarella cheese",
            "Basil leaves"
        ],
        instructions: [
            "Make the dough: In a bowl, combine the flour and salt. Gradually add the warm water, mixing until a dough forms. Knead for 5-7 minutes until smooth and elastic. Cover and let rest for 30 minutes.",
            "Prepare toppings: Slice the tomato and prepare the basil leaves.",
            "Assemble pizza: Roll out the dough, top with tomato slices, mozzarella, and basil.",
            "Bake: Preheat oven to 475°F. Bake the pizza for 10-12 minutes or until the crust is golden and the cheese is bubbly."
        ],
        time: 40,
        servings: 4,
        difficulty: "Medium",
        chefName: "Chef Antonio"
    },
    {
        id: 7,
        name: "Alfredo Pasta",
        category: "Dinner",
        subcategory: "italian", // Updated
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb9e",
        description: "A rich and creamy Alfredo pasta dish.",
        ingredients: [
            "1 pound fettuccine or linguine pasta",
            "1/2 cup unsalted butter",
            "1 cup heavy cream",
            "1 cup freshly grated Parmesan cheese",
            "1/4 teaspoon garlic powder",
            "1/4 teaspoon black pepper",
            "Salt to taste"
        ],
        instructions: [
            "Cook the pasta: Bring a large pot of salted water to a boil. Add the pasta and cook according to package directions until al dente. Drain and set aside.",
            "Make the Alfredo sauce: In a large skillet over medium heat, melt the butter. Stir in the heavy cream, Parmesan cheese, garlic powder, black pepper, and salt. Cook, stirring constantly, until the sauce is smooth and creamy.",
            "Combine: Toss the cooked pasta with the Alfredo sauce until well coated.",
            "Serve: Serve immediately, garnished with additional Parmesan cheese and fresh parsley, if desired."
        ],
        time: 25,
        servings: 4,
        difficulty: "Easy",
        chefName: "Chef Marco"
    },
    {
        id: 8,
        name: "Blueberry Pancakes",
        category: "Breakfast",
        subcategory: "american", // Updated
        image: "https://images.unsplash.com/photo-1623776050935-052bb0d12eb7",
        description: "Fluffy pancakes filled with fresh blueberries.",
        ingredients: ["Flour", "Milk", "Eggs", "Blueberries", "Baking powder", "Sugar", "Butter"],
        instructions: [
            "Mix dry ingredients: In a large bowl, whisk together the flour, baking powder, and sugar.",
            "Mix wet ingredients: In another bowl, whisk together the milk, eggs, and melted butter.",
            "Combine: Pour the wet ingredients into the dry ingredients and stir until just combined. Fold in the blueberries.",
            "Cook: Heat a griddle or large skillet over medium heat and grease lightly. Pour 1/4 cup of batter for each pancake onto the griddle. Cook until bubbles form on the surface, then flip and cook until golden brown on both sides.",
            "Serve: Serve the pancakes hot with maple syrup and additional blueberries."
        ],
        time: 20,
        servings: 4,
        difficulty: "Easy",
        chefName: "Chef Emily"
    },
    {
        id: 9, // Keeping the ID consistent
        name: "Crispy French Fries",
        category: "Lunch", // Updated to match the category options
        subcategory: "french", // Updated to match the subcategory options
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        description: "Golden and crispy French fries, perfect as a snack or side dish.",
        ingredients: [
            "4 large russet potatoes",
            "Vegetable oil, for frying",
            "Salt, to taste"
        ],
        instructions: [
            "Peel and cut potatoes into thin strips.",
            "Soak the potato strips in cold water for at least 30 minutes to remove excess starch.",
            "Heat vegetable oil in a deep fryer or large pot to 350°F (175°C).",
            "Dry the potato strips thoroughly with a clean kitchen towel.",
            "Fry the potatoes in batches for 3-4 minutes, until they are soft but not browned. Remove and drain on paper towels.",
            "Increase the oil temperature to 375°F (190°C).",
            "Fry the potatoes again in batches for 2-3 minutes, until golden and crispy.",
            "Remove from oil, drain on paper towels, and season with salt immediately.",
            "Serve hot with your favorite dipping sauce."
        ],
        time: 45, // Updated
        servings: 4, // Updated
        difficulty: "Easy", // Updated
        chefName: "Chef Sophie" // Updated
    },    
    {
        id: 10,
        name: "Chocolate Brownies",
        category: "Dessert",
        subcategory: "other", // Updated
        image: "https://images.unsplash.com/photo-1606312616463-c35ae53891e7",
        description: "Rich, fudgy chocolate brownies with a crispy top and gooey center.",
        ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour"],
        instructions: [
            "Melt chocolate and butter: In a saucepan over low heat, melt the chocolate and butter, stirring until smooth.",
            "Mix in sugar and eggs: Remove the saucepan from heat and stir in the sugar. Beat in the eggs one at a time.",
            "Add flour: Stir in the flour until just combined.",
            "Bake: Preheat the oven to 350°F. Pour the batter into a greased baking dish and bake for 25-30 minutes, or until a toothpick inserted into the center comes out with a few moist crumbs.",
            "Cool and serve: Let the brownies cool in the pan before cutting into squares and serving."
        ],
        time: 40,
        servings: 12,
        difficulty: "Medium",
        chefName: "Chef David"
    }
];

export default recipes;
