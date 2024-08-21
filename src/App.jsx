import React, { useEffect } from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Details from "./components/Details/Details";
import Create from "./components/Create";
import About from "./components/About";
import Blog from "./components/Blog";
import Update from "./components/Update";
import { useDispatch } from "react-redux";
import { asyncgetrecipies } from "./store/actions/recipeActions";
import Footer from "./components/Footer";

import BreakfastRecipes from "./components/RecipesPages/BreakfastRecipes";
import LunchRecipes from "./components/RecipesPages/LunchRecipes";
import DinnerRecipes from "./components/RecipesPages/DinnerRecipes";
import LatestRecipes from "./components/RecipesPages/LatestRecipes";

import RecipeBlogDetail from './components/Details/RecipeBlogDetail';
import CreatedRecipeDetail from './components/Details/CreatedRecipeDetail';
// import RecipeDetails from './components/Details/RecipeDetails';
import BreakfastRecipeDetails from "./components/Details/BreakfastRecipeDetails";
import LunchRecipeDetails from "./components/Details/LunchRecipeDetails";
import DinnerRecipeDetails from "./components/Details/DinnerRecipeDetails";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetrecipies());
  }, []);

  return (
    <div className="w-full m-auto p-4 bg-white ">
      <Nav />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="/update-recipe/:id" element={<Update />} />
        <Route path="/recipes/*" element={<Recipes />} />
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
        {/* <Route path="/:recipeType/:recipeSlug" element={<RecipeDetails />} /> */}
        {/* Recipe Pages end */}

        <Route path="/recipeblogdetail/:id" element={<RecipeBlogDetail />} />
        <Route path="/created-recipes/:id" element={<CreatedRecipeDetail />} />
        <Route path="latest" element={<LatestRecipes />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;