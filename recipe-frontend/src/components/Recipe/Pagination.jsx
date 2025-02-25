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

  const renderPageButton = (number, label = number) => (
    <li key={number} className="mx-0.5 sm:mx-1">
      <button
        onClick={() => onPageChange(number)}
        className={`px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border rounded ${
          currentPage === number
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500 hover:bg-blue-100"
        }`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <nav className="container mx-auto flex justify-center mt-4 sm:mt-6 lg:mt-8 rounded-3xl">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="mx-0.5 sm:mx-1">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border rounded bg-white text-blue-500 hover:bg-blue-100 disabled:text-gray-300 disabled:hover:bg-white"
          >
            Prev
          </button>
        </li>
        {startPage > 1 && (
          <>
            {renderPageButton(1)}
            {startPage > 2 && <li className="mx-0.5 sm:mx-1 text-gray-500">...</li>}
          </>
        )}
        {pageNumbers.map((number) => renderPageButton(number))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <li className="mx-0.5 sm:mx-1 text-gray-500">...</li>}
            {renderPageButton(totalPages)}
          </>
        )}
        <li className="mx-0.5 sm:mx-1">
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base border rounded bg-white text-blue-500 hover:bg-blue-100 disabled:text-gray-300 disabled:hover:bg-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;