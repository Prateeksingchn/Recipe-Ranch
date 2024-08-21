import React from "react";

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
    <nav className="w-full flex justify-center mt-8 rounded-3xl ">
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
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 border rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
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

export default Pagination;