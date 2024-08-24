import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";

const SearchAndFilterBar = ({
  searchTerm,
  setSearchTerm,
  isFilterOpen,
  setIsFilterOpen,
  sortBy,
  setSortBy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <div className="relative w-full sm:w-1/2 lg:w-2/3">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-4 pl-12 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500 transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <div className="flex space-x-4 w-full sm:w-auto">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex-1 sm:flex-none flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          <Filter size={20} className="mr-2" />
          Filter
        </button>
        <div className="relative flex-1 sm:flex-none">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:border-green-500"
          >
            <option value="rating">Top Rated</option>
            <option value="time">Quickest</option>
            <option value="calories">Lowest Calories</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchAndFilterBar;