# 🍳 Recipe Ranch

A modern recipe management application built with React, Vite, and Firebase, featuring recipe creation, nutrition tracking, and AI-powered recipe generation.

## 🌐 Live Demo
[Visit Recipe Ranch](https://recipe-application-2e710.web.app)

## ✨ Features

- 🎨 **Modern UI/UX** with Tailwind CSS and Framer Motion animations
- 🔐 **User Authentication** with Firebase
- 📱 **Responsive Design** for all devices
- 🍽️ **Recipe Management**
  - Create, update, and delete recipes
  - Categorize by meal type (Breakfast, Lunch, Dinner)
  - Filter by cuisine type
  - Track nutritional information
- 🤖 **AI Recipe Generation** using Google's Gemini AI
- 💾 **Local Storage** for offline recipe access
- 🌍 **International Cuisines** support
- 📊 **Nutrition Tracking** with detailed macro information

## 📸 Screenshots

### 🔹 Home Page
![Home Page](./App%20Images/Banner.png)

### 🔹 Authentication Page
![Auth Page](./App%20Images/Login.jpeg)

### 🔹 Recipe Page
![Recipe Page](./App%20Images/Dashboard.jpeg)

### 🔹 AI Recipe Generator
![AI Recipe Generator](./App%20Images/AIreecipe.jpeg)

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 14.0.0)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/recipe-ranch.git
cd recipe-ranch
```

2. Install dependencies
```bash
# Install frontend dependencies
cd recipe-frontend
npm install

# Install backend dependencies
cd ../recipe-backend
npm install
```

3. Environment Setup

Create `.env` files in both frontend and backend directories:

```env
# Frontend (.env)
REACT_APP_EDAMAM_APP_ID=7b948bd8
REACT_APP_EDAMAM_APP_KEY=c1f4f91b2d5ffb2918347647551d908f
REACT_APP_SPOONACULAR_API_KEY=52355b06aa4549bfa510d9b4f808b77a
PORT=5000
GEMINI_API_KEY=AIzaSyBFFZGYkqpn2f2LiGCtTDFDEdBSwiSAnI4
REACT_APP_API_URL=https://recipe-backend-5ut2.onrender.com
VITE_API_URL=https://recipe-backend-5ut2.onrender.com

# Backend (.env)
PORT=8080
GEMINI_API_KEY=your_gemini_api_key
```

4. Start the development servers

```bash
# Start frontend
cd recipe-frontend
npm run dev

# Start backend
cd recipe-backend
npm run dev
```

## 📱 Features Overview

### Recipe Management
- Create custom recipes with detailed ingredients and instructions
- Categorize recipes by meal type and cuisine
- Add nutritional information and cooking times
- Upload recipe images

### Nutrition Tracking
- Track macronutrients (protein, carbs, fat)
- Calculate total calories
- Monitor fiber intake
- Set dietary preferences

### AI Recipe Generation
- Generate recipes based on available ingredients
- Get AI-powered cooking suggestions
- Customize recipes by cuisine type

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Recipe data sourced from various culinary experts
- Icons provided by Lucide React
- UI components inspired by modern design practices

---

Made with ❤️ by [Your Name]
