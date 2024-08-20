import React, { useEffect } from "react";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import Create from "./components/Create";
import About from "./components/About";
import Blog from "./components/Blog";
import Update from "./components/Update";
import { useDispatch } from "react-redux";
import { asyncgetrecipies } from "./store/actions/recipeActions";
import Footer from "./components/Footer";

import BreakfastRecipes from "./components/BreakfastRecipes";
import LunchRecipes from "./components/LunchRecipes";
import DinnerRecipes from "./components/DinnerRecipes";

import RecipeBlogDetail from './components/RecipeBlogDetail';

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
        <Route path="/breakfast-recipes" element={<BreakfastRecipes />} />
        <Route path="/lunch-recipes" element={<LunchRecipes />} />
        <Route path="/dinner-recipes" element={<DinnerRecipes />} />
        <Route path="/recipeblogdetail/:id" element={<RecipeBlogDetail />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
