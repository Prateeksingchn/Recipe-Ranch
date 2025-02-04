import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncgetrecipies } from "./store/actions/recipeActions";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Details from "./components/Details/Details";
import Create from "./components/Create";
import About from "./components/About";
import Blog from "./components/Blog";
import Update from "./components/Update";
import Footer from "./components/Footer";

import BreakfastRecipes from "./components/RecipesPages/BreakfastRecipes";
import LunchRecipes from "./components/RecipesPages/LunchRecipes";
import DinnerRecipes from "./components/RecipesPages/DinnerRecipes";
import LatestRecipes from "./components/RecipesPages/LatestRecipes";

import RecipeBlogDetail from './components/Details/RecipeBlogDetail';
import CreatedRecipeDetail from './components/Details/CreatedRecipeDetail';

import BreakfastRecipeDetails from "./components/Details/BreakfastRecipeDetails";
import LunchRecipeDetails from "./components/Details/LunchRecipeDetails";
import DinnerRecipeDetails from "./components/Details/DinnerRecipeDetails";
import TopRecipeDetail from "./components/Details/TopRecipeDetail";
import NutritionRecipes from "./components/Home/NutritionRecipes";

// Import new components
import Nutrition from "./components/RecipesPages/Nutrition";
import NutritionRecipeDetail from "./components/Details/NutritionRecipeDetail";
import UserCreatedNutritionRecipeDetail from "./components/Details/UserCreatedNutritionRecipeDetail";
import UpdateUserRecipe from "./components/Nutrition/UpdateNutritionRecipe";
import CreateNutritionRecipe from "./components/Nutrition/CreateNutritionRecipe";

// Import SeasonalSpecials component
import SeasonalSpecials from "./components/Home/SeasonalSpecials";
import SeasonalRecipeDetails from "./components/Details/SeasonalRecipeDetails";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(asyncgetrecipies());
  }, []);

  return (
    <div className="w-full m-auto p-2 sm:p-3 md:p-4 lg:p-4 bg-white">
      {user && <Nav />}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />

        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        } />
        <Route path="/create-recipe" element={
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        } />
        <Route path="/update-recipe/:id" element={<Update />} />
        <Route path="/recipes/*" element={
          <ProtectedRoute>
            <Recipes />
          </ProtectedRoute>
        } />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        {/* Recipe Pages start */}
        <Route path="/breakfast-recipes" element={<BreakfastRecipes />} />
        <Route path="/lunch-recipes" element={<LunchRecipes />} />
        <Route path="/dinner-recipes" element={<DinnerRecipes />} />
        <Route path="/breakfast-recipes/:recipeSlug" element={<BreakfastRecipeDetails />} />
        <Route path="/lunch-recipes/:recipeSlug" element={<LunchRecipeDetails />} />
        <Route path="/dinner-recipes/:recipeSlug" element={<DinnerRecipeDetails />} />
        {/* Recipe Pages end */}

        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/recipeblogdetail/:id" element={<RecipeBlogDetail />} />
        <Route path="/created-recipes/:id" element={<CreatedRecipeDetail />} />
        <Route path="latest" element={<LatestRecipes />} />

        <Route path="/top-recipe/:id" element={<TopRecipeDetail />} />

        <Route path="/nutrition-recipes" element={<NutritionRecipes />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/nutrition-recipe/:id" element={<NutritionRecipeDetail />} />

        {/* New routes for user-created nutrition recipes */}
        <Route path="/user-nutrition-recipe/:id" element={<UserCreatedNutritionRecipeDetail />} />
        <Route path="/update-user-recipe/:id" element={<UpdateUserRecipe />} />
        <Route path="/create-nutrition-recipe" element={<CreateNutritionRecipe />} />

        {/* New routes for seasonal specials */}
        <Route path="/seasonal-specials" element={<SeasonalSpecials />} />
        <Route path="/seasonal-recipe/:slug" element={<SeasonalRecipeDetails />} />
      </Routes>
      {user && <Footer />}
    </div>
  );
};

export default App;