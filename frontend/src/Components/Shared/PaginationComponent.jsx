import React from 'react';
import { Pagination } from 'flowbite-react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages || 1}
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