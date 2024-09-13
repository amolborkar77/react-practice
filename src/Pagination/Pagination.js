// Create a Pagination Component: Design a pagination component that handles
// navigation between pages of data.
import React, { useState } from "react";
import Navigation from "./Navigation";

const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const Pagination = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Pagination Example</h1>
      <ul>
        {currentData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Pagination;
