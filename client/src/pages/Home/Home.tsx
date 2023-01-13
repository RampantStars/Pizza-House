import React from 'react';

import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaBlock } from '../../components/PizzaBlock';
import { Skeleton } from '../../components/PizzaBlock';
import { Pagination } from '../../components/Pagination';
import { SearchContext } from '../../App';

import styles from '../../app.module.scss';
import { categoryStore, filterStore } from '../../Utils/Store/Store';

export const Home: React.FC = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const currentCategory = categoryStore((state) => state.currentCategory);
  const currentFilter = filterStore((state) => state.currentFilter);

  React.useEffect(() => {
    setIsLoading(true);
    const category = currentCategory.id !== '0' ? `category=${currentCategory.id}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://62e276b3e8ad6b66d85c02f7.mockapi.io/pizzas/?page=${currentPage}&limit=8&${category}&sortBy=${currentFilter.sortProperty}&order=${currentFilter.sortOrder}${search}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [currentCategory, currentFilter, searchValue, currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.content__top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.content__title}>Все пиццы</h2>
      <div className={styles.content__items}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.items.map((item: any) => <PizzaBlock key={item.id} {...item} />)}
      </div>
      <Pagination
        onChangePage={(number: number) => {
          setCurrentPage(number);
        }}
        pizzasCount={pizzas.count}
        currentPage={currentPage}
      />
    </div>
  );
};
