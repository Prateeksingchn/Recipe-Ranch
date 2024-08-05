const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1600359731724-3892bd5971fd",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
        ingredients: ["Spaghetti", "Eggs", "Pecorino Romano cheese", "Pancetta", "Black pepper"],
        instructions: ["Cook spaghetti", "Fry pancetta", "Mix eggs and cheese", "Combine all ingredients"]
    },
    {
        id: 2,
        name: "Chicken Tikka Masala",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1600718375227-6d3e9805879e",
        description: "A popular Indian curry dish with marinated chicken in a creamy tomato sauce.",
        ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Cream", "Spices"],
        instructions: ["Marinate chicken", "Grill chicken", "Prepare sauce", "Combine chicken and sauce"]
    },
    {
        id: 3,
        name: "Caesar Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1571091718767-1e7c0a9e1560",
        description: "A refreshing salad with romaine lettuce, croutons, and Caesar dressing.",
        ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
        instructions: ["Wash and chop lettuce", "Prepare dressing", "Combine ingredients", "Toss salad"]
    },
    {
        id: 4,
        name: "Beef Tacos",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        description: "Delicious beef tacos with fresh toppings.",
        ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheese"],
        instructions: ["Cook beef", "Prepare toppings", "Assemble tacos"]
    },
    {
        id: 5,
        name: "Vegetable Stir Fry",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb9e",
        description: "A quick and healthy vegetable stir fry.",
        ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Oil"],
        instructions: ["Chop vegetables", "Heat oil", "Stir fry vegetables", "Add sauce"]
    },
    {
        id: 6,
        name: "Margherita Pizza",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1571091655789-11f98fbb3366",
        description: "A simple pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil"],
        instructions: ["Prepare dough", "Spread sauce", "Add cheese and basil", "Bake pizza"]
    },
    {
        id: 7,
        name: "Pad Thai",
        category: "Thai",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb9e",
        description: "A stir-fried rice noodle dish commonly served as street food in Thailand.",
        ingredients: ["Rice noodles", "Chicken", "Tofu", "Bean sprouts", "Peanuts", "Tamarind paste"],
        instructions: ["Soak noodles", "Cook chicken and tofu", "Add vegetables and sauce", "Combine with noodles"]
    },
    {
        id: 8,
        name: "Fish Tacos",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1623776050935-052bb0d12eb7",
        description: "Soft corn tortillas filled with seasoned fish, cabbage, and a creamy sauce.",
        ingredients: ["Fish fillets", "Taco shells", "Cabbage", "Lime", "Creamy sauce"],
        instructions: ["Season and cook fish", "Prepare toppings", "Assemble tacos"]
    },
    {
        id: 9,
        name: "Ratatouille",
        category: "French",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        description: "A French Provençal stewed vegetable dish, originating in Nice.",
        ingredients: ["Zucchini", "Eggplant", "Bell peppers", "Tomatoes", "Onions", "Garlic"],
        instructions: ["Chop vegetables", "Cook onions and garlic", "Add remaining vegetables", "Simmer until tender"]
    },
    {
        id: 10,
        name: "Chocolate Brownies",
        category: "Dessert",
        image: "https://images.unsplash.com/photo-1606312616463-c35ae53891e7",
        description: "A square or rectangular chocolate baked treat.",
        ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour"],
        instructions: ["Melt chocolate and butter", "Mix in sugar and eggs", "Add flour", "Bake in oven"]
    },
    {
        id: 11,
        name: "Sushi",
        category: "Japanese",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
        description: "A Japanese dish consisting of vinegared rice accompanied by various ingredients such as seafood and vegetables.",
        ingredients: ["Sushi rice", "Nori", "Fish", "Vegetables", "Soy sauce"],
        instructions: ["Prepare rice", "Slice fish and vegetables", "Assemble sushi rolls"]
    },
    {
        id: 12,
        name: "Pho",
        category: "Vietnamese",
        image: "https://images.unsplash.com/photo-1515900168107-3e6b84b0f3e8",
        description: "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat, usually beef or chicken.",
        ingredients: ["Beef or chicken", "Rice noodles", "Broth", "Herbs", "Spices"],
        instructions: ["Prepare broth", "Cook meat", "Cook noodles", "Assemble soup"]
    },
];

export default recipes;
