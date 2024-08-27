const homeRecipes = [
  {
      id: 1,
      name: "Spaghetti Carbonara",
      image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww",
      description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
      ingredients: ["Spaghetti", "Eggs", "Pecorino Romano cheese", "Pancetta", "Black pepper"],
      instructions: ["Cook spaghetti", "Fry pancetta", "Mix eggs and cheese", "Combine all ingredients"]
  },
  {
      id: 2,
      name: "Chicken Tikka Masala",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpY2tlbiUyMFRpa2thJTIwTWFzYWxhfGVufDB8fDB8fHww",
      description: "A popular Indian curry dish with marinated chicken in a creamy tomato sauce.",
      ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Cream", "Spices"],
        instructions: ["Marinate chicken", "Grill chicken", "Prepare sauce", "Combine chicken and sauce"]
  },
  {
      id: 3,
      name: "Caesar Salad",
      image: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D",
      description: "A refreshing salad with romaine lettuce, croutons, and Caesar dressing.",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
        instructions: ["Wash and chop lettuce", "Prepare dressing", "Combine ingredients", "Toss salad"]
      
  },
  {
      id: 4,
      name: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1649688423692-308d2fc1027d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww",
      description: "A simple pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
      ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Oil"],
        instructions: ["Chop vegetables", "Heat oil", "Stir fry vegetables", "Add sauce"]
  },
  {
      id: 5,
      name: "Pad Thai",
      image: "https://plus.unsplash.com/premium_photo-1661609658924-bf1316ebdcb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBhZCUyMFRoYWl8ZW58MHx8MHx8fDA%3D",
      description: "A stir-fried rice noodle dish commonly served as street food in Thailand.",
      ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil"],
        instructions: ["Prepare dough", "Spread sauce", "Add cheese and basil", "Bake pizza"]
  },
  {
      id: 6,
      name: "Fish Tacos",
      image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlzaCUyMFRhY29zfGVufDB8fDB8fHww",
      description: "Soft corn tortillas filled with seasoned fish, cabbage, and a creamy sauce.",
      ingredients: ["Rice noodles", "Chicken", "Tofu", "Bean sprouts", "Peanuts", "Tamarind paste"],
        instructions: ["Soak noodles", "Cook chicken and tofu", "Add vegetables and sauce", "Combine with noodles"]
  },
  {
      id: 7,
      name: "Ratatouille",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      description: "A French Provençal stewed vegetable dish, originating in Nice.",
      ingredients: ["Fish fillets", "Taco shells", "Cabbage", "Lime", "Creamy sauce"],
        instructions: ["Season and cook fish", "Prepare toppings", "Assemble tacos"]
  },
  {
      id: 8,
      name: "Chocolate Brownies",
      image: "https://images.unsplash.com/photo-1617996884841-3949eaec3448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hvY29sYXRlJTIwQnJvd25pZXN8ZW58MHx8MHx8fDA%3D",
      description: "A square or rectangular chocolate baked treat.",
      ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Chocolate chips"],
        instructions: ["Mix ingredients", "Bake", "Decorate with chocolate chips"]
  },
  {
      id: 9,
      name: "Sushi",
      image: "https://plus.unsplash.com/premium_photo-1668143358351-b20146dbcc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VzaGl8ZW58MHx8MHx8fDA%3D",
      description: "A Japanese dish consisting of vinegared rice accompanied by various ingredients such as seafood and vegetables.",
      ingredients: ["Rice", "Fish", "Vegetables", "Seafood"],
        instructions: ["Cook rice", "Prepare ingredients", "Assemble sushi"]
  },
  {
      id: 10,
      name: "Pho",
      image: "https://plus.unsplash.com/premium_photo-1694699355274-862bfb5ae036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGhvfGVufDB8fDB8fHww",
      description: "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat, usually beef or chicken.",
      ingredients: ["Broth", "Rice noodles", "Meat", "Herbs"],
        instructions: ["Prepare broth", "Cook rice noodles", "Add meat and herbs"]
  },
  {
      id: 11,
      name: "Lemon Tart",
      image: "https://images.unsplash.com/photo-1667994659954-49a92b3c3991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fExlbW9uJTIwVGFydHxlbnwwfHwwfHx8MA%3D%3D",
      description: "A dessert dish consisting of a lemon-flavored filling in a pastry shell.",
      ingredients: ["Lemon", "Flour", "Sugar", "Eggs", "Butter"],
        instructions: ["Mix ingredients", "Bake", "Decorate with sugar and lemon peel"]
  },
];

export default homeRecipes;
