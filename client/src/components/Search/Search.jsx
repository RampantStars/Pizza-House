import React from 'react';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className={styles.root}
      placeholder="Поиск пиццы..."
      type="search"
    />
  );
};
