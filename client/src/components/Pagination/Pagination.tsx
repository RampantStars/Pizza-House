import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  meta: any;
  onChangePage: (number: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ meta, onChangePage }) => {
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
      pageCount={meta.totalPages}
      forcePage={meta.currentPage - 1}
    />
  );
};
