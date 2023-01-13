import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  pizzasCount: number;
  currentPage: number;
  onChangePage: (number: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  onChangePage,
  pizzasCount,
  currentPage,
}) => {
  const changePage = (number: number) => {
    onChangePage(number);
    return number;
  };
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={pizzasCount / Math.round(8) > 1 ? pizzasCount / Math.round(8) : changePage(1)}
      forcePage={currentPage - 1}
    />
  );
};
