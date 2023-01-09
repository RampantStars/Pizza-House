import React from 'react';

import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaBlock } from '../../components/PizzaBlock';
import { Skeleton } from '../../components/PizzaBlock';
import { Pagination } from '../../components/Pagination';
import { SearchContext } from '../../App';

import styles from '../../app.module.scss';
import { categoryStore } from '../../Utils/Store/Store';

export const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности ↑',
    sortProperty: 'rating',
    sortOrder: 'asc',
  });
  const currentCategory = categoryStore((state) => state.currentCategory);

  React.useEffect(() => {
    setIsLoading(true);
    const category = currentCategory.id > 0 ? `category=${currentCategory.id}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://62e276b3e8ad6b66d85c02f7.mockapi.io/pizzas/?page=${currentPage}&limit=8&${category}&sortBy=${sortType.sortProperty}&order=${sortType.sortOrder}${search}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [currentCategory, sortType, searchValue, currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.content__top}>
        <Categories value={currentCategory.id} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} pizzasCount={pizzas.count} />
    </div>
  );
};
