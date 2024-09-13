import React from "react";

const Navigation = ({ currentPage, handlePageChange, totalPages }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            margin: "0 5px",
            backgroundColor: page === currentPage ? "blue" : "white",
            color: page === currentPage ? "white" : "black",
            border: "1px solid #ddd",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
