import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipeCard = ({ recipe, isUserCreated }) => (
  <div className="border rounded-lg overflow-hidden m-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)]">
    <img src={recipe.image} alt={recipe.label || recipe.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{recipe.label || recipe.title}</h3>
      <p className="text-gray-600 mt-2">{recipe.source || (isUserCreated ? "User Created" : "")}</p>
      {(recipe.cuisineType?.[0] || recipe.category) && (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
          {recipe.cuisineType?.[0] || recipe.category}
        </span>
      )}
      <div className="mt-4 flex justify-between">
        <Link to={`/recipe/${encodeURIComponent(recipe.uri?.split('#')[1] || recipe.id)}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const RecipeList = ({ recipes, isUserCreated = false }) => (
  <div className="flex flex-wrap -mx-2">
    {recipes.length > 0 ? (
      recipes.map((recipe) => recipe && <RecipeCard key={recipe.uri || recipe.id} recipe={recipe} isUserCreated={isUserCreated} />)
    ) : (
      <p className="w-full text-center text-xl text-gray-500 mt-10">No recipes found</p>
    )}
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex items-center">
        <li className="mx-1">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded bg-white text-blue-500 disabled:text-gray-300"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="mx-1">
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded bg-white text-blue-500 disabled:text-gray-300"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(20);
  const [totalResults, setTotalResults] = useState(0);
  const [categories, setCategories] = useState([]);
  
  const userCreatedRecipes = useSelector((state) => state.recipeReducer.recipes);

  useEffect(() => {
    fetchEdamamRecipes(currentPage, searchTerm, selectedCategory);
  }, [currentPage, searchTerm, selectedCategory]);

  const fetchEdamamRecipes = async (page, query, category) => {
    const APP_ID = '7b948bd8';
    const APP_KEY = 'c1f4f91b2d5ffb2918347647551d908f';
    const from = (page - 1) * recipesPerPage;
    const to = from + recipesPerPage;
    let url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`;
    
    if (query) {
      url += `&q=${encodeURIComponent(query)}`;
    } else {
      url += '&q=chicken'; // Default search term if none provided
    }
    if (category) {
      url += `&cuisineType=${encodeURIComponent(category)}`;
    }

    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setAllRecipes(data.hits.map(hit => hit.recipe));
      setTotalResults(data.count);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.hits.flatMap(hit => hit.recipe.cuisineType || []))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching recipes from Edamam:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const totalPages = Math.ceil(totalResults / recipesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Our Recipes</h1>
          <p className="text-zinc-500 mt-2">Discover delicious recipes from around the world</p>
        </div>
        <Link to="/create-recipe" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create New Recipe
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Created Recipes</h2>
        <RecipeList recipes={userCreatedRecipes} isUserCreated={true} />
      </div>

      <div className="mb-8 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full p-2 pl-10 border rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <select
          className="p-2 border rounded-md"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
      {isLoading ? (
        <p className="text-center text-xl">Loading recipes...</p>
      ) : (
        <RecipeList recipes={allRecipes} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Recipes;