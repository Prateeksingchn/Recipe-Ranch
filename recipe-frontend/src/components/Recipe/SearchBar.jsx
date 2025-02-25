import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

const SearchBar = ({ categories, setAllRecipes, setTotalResults, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [localResults, setLocalResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchLocalStorage();
      searchAPI();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const searchLocalStorage = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const filteredRecipes = storedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || recipe.category === selectedCategory)
    );
    setLocalResults(filteredRecipes);
  };

  const searchAPI = async () => {
    setIsLoading(true);
    const APP_ID = "7b948bd8";
    const APP_KEY = "c1f4f91b2d5ffb2918347647551d908f";
    const from = 0;
    const to = 12;  // Fetch first page of results
    const defaultSearchTerms = [
      "vegetarian", "chicken", "pasta", "salad", 
      "soup", "dessert", "breakfast", "lunch", "dinner", "snack"
    ];
    const query = searchTerm || defaultSearchTerms[Math.floor(Math.random() * defaultSearchTerms.length)];
    let url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}&q=${encodeURIComponent(query)}`;

    if (selectedCategory) {
      url += `&cuisineType=${encodeURIComponent(selectedCategory)}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllRecipes(data.hits.map((hit) => hit.recipe));
      setTotalResults(data.count);
      onSearch(query);
    } catch (error) {
      console.error('Error fetching recipes from Edamam API:', error);
      setAllRecipes([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleRecipeClick = (recipe) => {
    navigate(`/created-recipes/${recipe.id}`);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-teal-300 px-5 sm:px-4 md:px-6 lg:px-8 py-5 sm:py-4 md:py-5 lg:py-6 my-8 sm:my-6 md:my-8" ref={searchRef}>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
        <div className="relative w-full sm:w-2/3 md:w-3/4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for recipes"
            className="w-full py-2 sm:py-3 pl-10 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 ease-in-out text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={handleFocus}
          />
        </div>

        {/* Category filter */}
        <div className="relative w-full sm:w-1/3 md:w-1/4">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <select
            className="w-full py-2 sm:py-3 pl-10 pr-8 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all duration-300 ease-in-out text-sm sm:text-base"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isFocused ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : localResults.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-3 sm:p-4">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-gray-800">Our Latest Recipes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {localResults.slice(0, 10).map((recipe, index) => (
                <button
                  key={`local-${index}`}
                  onClick={() => handleRecipeClick(recipe)}
                  className="text-left px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ease-in-out truncate text-sm sm:text-base"
                >
                  {recipe.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-3 sm:py-4 text-sm sm:text-base">No recipes found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;