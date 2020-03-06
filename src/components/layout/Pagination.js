import React from "react";

import "./Pagination.css";

const Pagination = ({ currentPage, availablePages, path, totalPages }) => {
  return (
    <div className="pagination">
      {currentPage > 4 && (
        <span className="ellipses">
          <a className="pagination-link back" href={`${path}/1`}>
            1
          </a>
          <span>. . .</span>
        </span>
      )}
      {currentPage !== 1 && (
        <a className="pagination-link" href={`${path}/${currentPage - 1}`}>
          Prev
        </a>
      )}
      {availablePages.map(page => (
        <a
          key={page}
          className={`pagination-link ${currentPage === page &&
            "current-active"}`}
          href={`${path}/${page}`}
        >
          {page}
        </a>
      ))}
      {currentPage < totalPages && (
        <a className="pagination-link" href={`${path}/${currentPage + 1}`}>
          Next
        </a>
      )}
    </div>
  );
};

export default Pagination;
