const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const router = express.Router();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.AIzaSyBFFZGYkqpn2f2LiGCtTDFDEdBSwiSAnI4);

router.post('/api/generate-recipe', async (req, res) => {
  const { ingredients, cuisine } = req.body;
  
  try {
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Create a ${cuisine} recipe using these ingredients: ${ingredients}. 
    Please format the response with:
    1. Recipe Title
    2. Ingredients List (including quantities)
    3. Step by step cooking instructions
    4. Approximate cooking time`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      title: "Generated Recipe",
      content: text
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate recipe' });
  }
}); 

module.exports = router; 