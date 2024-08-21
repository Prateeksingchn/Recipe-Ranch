import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchBar = ({
  searchTerm,
  handleSearch,
  selectedCategory,
  handleCategoryChange,
  categories,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center justify-between space-x-4 my-8">
      <div className="relative flex-grow">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for recipes"
          className="w-full py-3 pl-12 pr-10 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-300"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="relative">
        <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <select
          className="w-full py-3 pl-12 pr-8 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-colors duration-300"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 w-5 h-5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300">
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;