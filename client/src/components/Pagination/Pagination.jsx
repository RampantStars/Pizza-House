import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

export const Pagination = ({ onChangePage, pizzasCount }) => {
  const changePage = (number) => {
    onChangePage(number);
    return number;
  };
  return (
    /**
     * TODO: Переделать пагинацию на Material UI
     */
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={pizzasCount / Math.round(8) > 1 ? pizzasCount / Math.round(8) : changePage(1)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
