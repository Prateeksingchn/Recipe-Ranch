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
    {
        id: 13,
        name: "Lasagna",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1574110350397-96c21d2e0ba8",
        description: "A classic Italian dish with layers of pasta, meat sauce, and cheese.",
        ingredients: ["Lasagna noodles", "Ground beef", "Tomato sauce", "Ricotta cheese", "Mozzarella cheese"],
        instructions: ["Cook noodles", "Prepare meat sauce", "Layer ingredients", "Bake in oven"]
    },
    {
        id: 14,
        name: "Butter Chicken",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1571091718767-1e7c0a9e1560",
        description: "A rich and creamy Indian curry with tender pieces of chicken.",
        ingredients: ["Chicken", "Butter", "Tomato sauce", "Cream", "Spices"],
        instructions: ["Marinate chicken", "Cook chicken", "Prepare sauce", "Combine chicken and sauce"]
    },
    {
        id: 15,
        name: "Greek Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
        description: "A fresh and vibrant salad with tomatoes, cucumbers, olives, and feta cheese.",
        ingredients: ["Tomatoes", "Cucumbers", "Olives", "Feta cheese", "Olive oil"],
        instructions: ["Chop vegetables", "Prepare dressing", "Combine ingredients", "Toss salad"]
    },
    {
        id: 16,
        name: "Chicken Enchiladas",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        description: "Rolled tortillas filled with chicken and topped with a savory sauce.",
        ingredients: ["Chicken", "Tortillas", "Enchilada sauce", "Cheese", "Onions"],
        instructions: ["Cook chicken", "Fill tortillas", "Top with sauce and cheese", "Bake in oven"]
    },
    {
        id: 17,
        name: "Sweet and Sour Pork",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        description: "A popular Chinese dish with crispy pork in a tangy sauce.",
        ingredients: ["Pork", "Bell peppers", "Pineapple", "Vinegar", "Sugar"],
        instructions: ["Cook pork", "Prepare sauce", "Combine pork and sauce", "Serve with rice"]
    },
    {
        id: 18,
        name: "Ravioli",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
        description: "Italian stuffed pasta filled with cheese and served with a tomato sauce.",
        ingredients: ["Ravioli", "Tomato sauce", "Parmesan cheese", "Basil"],
        instructions: ["Cook ravioli", "Prepare sauce", "Combine ravioli and sauce", "Top with cheese and basil"]
    },
    {
        id: 19,
        name: "Palak Paneer",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1563805042-7684bc5e373f",
        description: "A vegetarian Indian dish with spinach and paneer cheese.",
        ingredients: ["Spinach", "Paneer", "Tomatoes", "Spices", "Cream"],
        instructions: ["Cook spinach", "Prepare sauce", "Add paneer", "Combine with spinach"]
    },
    {
        id: 20,
        name: "Caprese Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1576201836105-8b45f8c1ff7f",
        description: "A simple Italian salad with tomatoes, mozzarella, and basil.",
        ingredients: ["Tomatoes", "Mozzarella cheese", "Basil", "Olive oil", "Balsamic vinegar"],
        instructions: ["Slice tomatoes and mozzarella", "Arrange on plate", "Top with basil", "Drizzle with oil and vinegar"]
    },
    {
        id: 21,
        name: "Chicken Fajitas",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1574360916469-9d0c0e3dcf9e",
        description: "Sizzling chicken strips with bell peppers and onions, served with tortillas.",
        ingredients: ["Chicken", "Bell peppers", "Onions", "Tortillas", "Spices"],
        instructions: ["Cook chicken", "Sauté vegetables", "Combine with spices", "Serve with tortillas"]
    },
    {
        id: 22,
        name: "General Tso's Chicken",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
        description: "A popular Chinese-American dish with deep-fried chicken in a sweet and spicy sauce.",
        ingredients: ["Chicken", "Soy sauce", "Vinegar", "Sugar", "Spices"],
        instructions: ["Fry chicken", "Prepare sauce", "Combine chicken and sauce", "Serve with rice"]
    },
    {
        id: 23,
        name: "Penne Arrabbiata",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1580502303352-0cd9d4fc76c6",
        description: "A spicy Italian pasta dish with penne and a garlic-tomato sauce.",
        ingredients: ["Penne pasta", "Tomato sauce", "Garlic", "Red chili flakes", "Parsley"],
        instructions: ["Cook pasta", "Prepare sauce", "Combine pasta and sauce", "Top with parsley"]
    },
    {
        id: 24,
        name: "Aloo Gobi",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
        description: "A vegetarian Indian dish with potatoes, cauliflower, and spices.",
        ingredients: ["Potatoes", "Cauliflower", "Tomatoes", "Spices"],
        instructions: ["Cook potatoes and cauliflower", "Prepare sauce", "Combine with sauce"]
    },
    {
        id: 25,
        name: "Waldorf Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1573821663916-77f0c9a6e780",
        description: "A classic American salad with apples, walnuts, and celery in a mayonnaise dressing.",
        ingredients: ["Apples", "Walnuts", "Celery", "Mayonnaise"],
        instructions: ["Chop ingredients", "Prepare dressing", "Combine ingredients", "Toss salad"]
    },
    {
        id: 26,
        name: "Quesadillas",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1601924576702-e9c26f1607c4",
        description: "Tortillas filled with cheese and other ingredients, then grilled.",
        ingredients: ["Tortillas", "Cheese", "Chicken", "Bell peppers", "Onions"],
        instructions: ["Prepare fillings", "Fill tortillas", "Grill until cheese is melted"]
    },
    {
        id: 27,
        name: "Kung Pao Chicken",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        description: "A spicy, stir-fried Chinese dish made with chicken, peanuts, and vegetables.",
        ingredients: ["Chicken", "Peanuts", "Bell peppers", "Soy sauce", "Chili peppers"],
        instructions: ["Cook chicken", "Stir-fry vegetables", "Combine with sauce and peanuts"]
    },
    {
        id: 28,
        name: "Fettuccine Alfredo",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1574169604439-31da86d9ed4f",
        description: "A rich and creamy pasta dish made with butter, cream, and Parmesan cheese.",
        ingredients: ["Fettuccine", "Butter", "Cream", "Parmesan cheese", "Garlic"],
        instructions: ["Cook fettuccine", "Prepare sauce", "Combine pasta and sauce"]
    },
    {
        id: 29,
        name: "Lamb Vindaloo",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1598511756005-9f16ff11e86a",
        description: "A spicy Indian curry made with marinated lamb and vinegar.",
        ingredients: ["Lamb", "Vinegar", "Garlic", "Spices", "Onions"],
        instructions: ["Marinate lamb", "Cook onions and spices", "Add lamb and simmer"]
    },
    {
        id: 30,
        name: "Cobb Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1563805042-7684bc5e373f",
        description: "A hearty American salad with chicken, bacon, eggs, and avocado.",
        ingredients: ["Chicken", "Bacon", "Eggs", "Avocado", "Lettuce"],
        instructions: ["Cook chicken and bacon", "Prepare dressing", "Combine ingredients", "Toss salad"]
    },
    {
        id: 31,
        name: "Burritos",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1586391355092-8d7e5b6e6f11",
        description: "Large flour tortillas filled with meat, beans, and other toppings.",
        ingredients: ["Tortillas", "Ground beef", "Beans", "Cheese", "Lettuce"],
        instructions: ["Cook beef", "Prepare fillings", "Assemble burritos"]
    },
    {
        id: 32,
        name: "Orange Chicken",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1603076625964-d9e8e8f0d1f0",
        description: "Crispy fried chicken tossed in a sweet and tangy orange sauce.",
        ingredients: ["Chicken", "Orange juice", "Soy sauce", "Sugar", "Garlic"],
        instructions: ["Fry chicken", "Prepare sauce", "Combine chicken and sauce"]
    },
    {
        id: 33,
        name: "Risotto",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1580910051074-0af7fab0662e",
        description: "A creamy Italian rice dish cooked with broth and Parmesan cheese.",
        ingredients: ["Arborio rice", "Chicken broth", "Parmesan cheese", "Onions", "Butter"],
        instructions: ["Sauté onions", "Add rice and broth", "Cook until creamy", "Stir in cheese"]
    },
    {
        id: 34,
        name: "Chana Masala",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1567330529693-355af3dd7b7b",
        description: "A flavorful Indian chickpea curry with tomatoes and spices.",
        ingredients: ["Chickpeas", "Tomatoes", "Onions", "Garlic", "Spices"],
        instructions: ["Cook onions and spices", "Add tomatoes and chickpeas", "Simmer until thickened"]
    },
    {
        id: 35,
        name: "Niçoise Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1572441718171-bd24384f4275",
        description: "A French salad with tuna, hard-boiled eggs, and olives.",
        ingredients: ["Tuna", "Eggs", "Olives", "Green beans", "Lettuce"],
        instructions: ["Cook beans and eggs", "Prepare dressing", "Combine ingredients", "Toss salad"]
    },
    {
        id: 36,
        name: "Chiles Rellenos",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1569695749271-8f0e29d8e926",
        description: "Poblano peppers stuffed with cheese and fried in a light batter.",
        ingredients: ["Poblano peppers", "Cheese", "Eggs", "Flour", "Tomato sauce"],
        instructions: ["Roast and peel peppers", "Stuff with cheese", "Coat in batter and fry"]
    },
    {
        id: 37,
        name: "Teriyaki Chicken",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb9e",
        description: "Grilled chicken glazed with a sweet and savory teriyaki sauce.",
        ingredients: ["Chicken", "Soy sauce", "Sugar", "Mirin", "Ginger"],
        instructions: ["Marinate chicken", "Grill chicken", "Prepare sauce", "Glaze chicken with sauce"]
    },
    {
        id: 38,
        name: "Osso Buco",
        category: "Italian",
        image: "https://images.unsplash.com/photo-1598511756005-9f16ff11e86a",
        description: "A traditional Italian dish of braised veal shanks with vegetables.",
        ingredients: ["Veal shanks", "Carrots", "Celery", "Onions", "Tomatoes"],
        instructions: ["Brown veal shanks", "Sauté vegetables", "Braise with broth and tomatoes"]
    },
    {
        id: 39,
        name: "Rogan Josh",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1563805042-7684bc5e373f",
        description: "A spicy and aromatic Indian curry made with lamb.",
        ingredients: ["Lamb", "Yogurt", "Tomatoes", "Garlic", "Spices"],
        instructions: ["Cook onions and spices", "Add lamb and tomatoes", "Simmer with yogurt"]
    },
    {
        id: 40,
        name: "Chef's Salad",
        category: "Salad",
        image: "https://images.unsplash.com/photo-1563805042-7684bc5e373f",
        description: "A mixed salad with meats, cheese, and hard-boiled eggs.",
        ingredients: ["Lettuce", "Ham", "Turkey", "Cheese", "Eggs"],
        instructions: ["Chop ingredients", "Prepare dressing", "Combine ingredients", "Toss salad"]
    },
    {
        id: 41,
        name: "Tamales",
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1587430373094-2075583e015b",
        description: "Traditional Mexican dish made with masa dough and various fillings.",
        ingredients: ["Masa harina", "Chicken", "Corn husks", "Chili sauce", "Spices"],
        instructions: ["Prepare masa dough", "Cook filling", "Assemble tamales", "Steam tamales"]
    },
    {
        id: 42,
        name: "Szechuan Beef",
        category: "Asian",
        image: "https://images.unsplash.com/photo-1598511756005-9f16ff11e86a",
        description: "Spicy stir-fried beef with Szechuan peppers and vegetables.",
        ingredients: ["Beef", "Szechuan peppers", "Bell peppers", "Soy sauce", "Garlic"],
        instructions: ["Cook beef", "Stir-fry vegetables", "Combine with sauce and beef"]
    },
];

export default recipes;
