// Custom hook for paging logic
import { useState } from 'react';
const usePaging = (data, initialPage = 1, pageSize = 4) => {
  const [page, setPage] = useState(initialPage);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const paginatedData = data?.slice(startIndex, endIndex) || [];

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return { paginatedData, totalPages, currentPage: page, changePage };
};

export default usePaging;
