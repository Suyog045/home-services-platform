import React from 'react';
import { Pagination } from 'flowbite-react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
        previousLabel="Back"
        nextLabel="Next"
        layout="pagination"
        className="text-primary"
      />
    </div>
  );
};

export default PaginationComponent;
