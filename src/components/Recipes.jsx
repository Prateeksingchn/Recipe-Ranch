import React, { useState } from 'react';
import { Link, useLocation, Routes, Route } from "react-router-dom";
import recipes from "../data/recipes";
import Details from "./Details";

const RecipeCard = ({ recipe }) => (
  <div className="border rounded-lg overflow-hidden m-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)]">
    <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{recipe.name}</h3>
      <p className="text-gray-600 mt-2">{recipe.description}</p>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
        {recipe.category}
      </span>
      <div className="mt-4 flex justify-between">
        <Link to={`/recipes/${recipe.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Recipe
          </button>
        </Link>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  </div>
);

const RecipeList = ({ filteredRecipes }) => (
  <div className="flex flex-wrap -mx-2">
    {filteredRecipes.length > 0 ? (
      filteredRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
    ) : (
      <p className="w-full text-center text-xl text-gray-500 mt-10">No recipes found</p>
    )}
  </div>
);

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Routes>
        <Route path="/" element={
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">Our Recipes</h1>
                <p className="text-zinc-500 mt-2">Discover delicious recipes from around the world</p>
              </div>
              <Link to="/create-recipe">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create Recipe
                </button>
              </Link>
            </div>

            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full p-2 pl-10 border rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <RecipeList filteredRecipes={filteredRecipes} />
          </>
        } />
        <Route path="/recipes/:id" element={<Details />} />
      </Routes> 
    </div>
  );
};

export default Recipes;
