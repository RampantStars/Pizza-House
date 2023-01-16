import React from 'react';
import { shallow } from 'zustand/shallow';
import { SearchContext } from '../../App';
import { useFilterStore } from '../../Utils/Stores/FilterStore';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const { setSearch, search } = useFilterStore(
    ({ setSearch, search }) => ({ setSearch, search }),
    shallow,
  );
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.root}
      placeholder="Поиск пиццы..."
      type="search"
    />
  );
};
