import React, { useState } from "react";
import NewsItem from "./newsItem";

const NewsList = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change to 10 items per page

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(news.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="card-container">
        {currentItems.length === 0 ? (
          <p>No news found</p>
        ) : (
          currentItems.map((article, index) => <NewsItem key={index} article={article} />)
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsList;