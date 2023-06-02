import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { useFilterStore } from '../../Utils/Stores/FilterStore';

type PaginationProps = {
  meta: any;
};
export const Pagination: React.FC<PaginationProps> = ({ meta }) => {
  const setPage = useFilterStore((state) => state.setPage);
  const onChangePage = (number: number) => (meta.totalPages !== 1 ? setPage(number) : '');
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
