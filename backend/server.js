require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

// Update CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-frontend-domain.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Add this to test the server is working
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.post('/api/generate-recipe', async (req, res) => {
  const { ingredients, cuisine, dietaryPreferences, cookingTime, servings, difficulty, mealType } = req.body;
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Build dynamic prompt based on provided inputs
    let prompt = `Create a delicious recipe with the following preferences:\n`;
    
    if (ingredients) {
      prompt += `Using these ingredients: ${ingredients}\n`;
    } else {
      prompt += `Suggest ingredients suitable for the preferences below.\n`;
    }

    if (cuisine) prompt += `Cuisine type: ${cuisine}\n`;
    if (mealType) prompt += `Meal type: ${mealType}\n`;
    if (dietaryPreferences) {
      // Handle specific dietary restrictions
      if (dietaryPreferences.toLowerCase().includes('no beef')) {
        prompt += `Dietary preferences: Non-vegetarian (excluding beef)\n`;
      } else {
        prompt += `Dietary preferences: ${dietaryPreferences}\n`;
      }
    }
    if (cookingTime) prompt += `Preferred cooking time: ${cookingTime}\n`;
    if (servings) prompt += `Number of servings: ${servings}\n`;
    if (difficulty) prompt += `Difficulty level: ${difficulty}\n`;

    prompt += `\nBe creative and suggest a complete recipe that matches these preferences. If any details are missing, use appropriate defaults for the cuisine and meal type.

    Format the response as a JSON object with these exact keys:
    {
      "title": "Recipe name",
      "description": "Brief description",
      "cookingTime": "Total time",
      "servings": "Number of servings",
      "difficulty": "easy/medium/hard",
      "ingredients": ["ingredient 1 with quantity", "ingredient 2 with quantity"],
      "instructions": ["step 1", "step 2"],
      "tips": "Chef's tips for best results",
      "macros": {
        "calories": "per serving",
        "protein": "grams per serving",
        "carbs": "grams per serving",
        "fat": "grams per serving",
        "fiber": "grams per serving"
      }
    }`;

    console.log('Sending prompt to Gemini:', prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    console.log('Raw response from Gemini:', text);

    // Remove any "json" prefix or extra text
    if (text.includes('{')) {
      text = text.substring(text.indexOf('{'));
    }
    
    try {
      const recipeData = JSON.parse(text);
      console.log('Successfully parsed recipe data:', recipeData);
      res.json(recipeData);
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      console.error('Text being parsed:', text);
      
      // Attempt to clean the response
      const cleanedText = text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();
      
      try {
        const recipeData = JSON.parse(cleanedText);
        console.log('Successfully parsed cleaned recipe data:', recipeData);
        res.json(recipeData);
      } catch (secondError) {
        console.error('Failed to parse cleaned response:', secondError);
        res.status(500).json({ 
          error: 'Failed to parse recipe data',
          details: secondError.message 
        });
      }
    }
  } catch (error) {
    console.error('Error generating recipe:', error);
    res.status(500).json({ 
      error: 'Failed to generate recipe',
      details: error.message,
      stack: error.stack
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the server at http://localhost:${PORT}/test`);
}); 