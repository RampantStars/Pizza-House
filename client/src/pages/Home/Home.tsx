import React from 'react';

import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { PizzaBlock } from '../../components/PizzaBlock';
import { Skeleton } from '../../components/PizzaBlock';
import { Pagination } from '../../components/Pagination';

import styles from '../../app.module.scss';
import { useCategoryStore } from '../../Utils/Stores/CategoryStore';
import { useFilterStore } from '../../Utils/Stores/FilterStore';
import { shallow } from 'zustand/shallow';

export const Home: React.FC = () => {
  const [pizzas, setPizzas] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const currentCategory = useCategoryStore((state) => state.currentCategory);
  const { search, currentFilter } = useFilterStore(
    ({ search, currentFilter }) => ({
      search,
      currentFilter,
    }),
    shallow,
  );

  React.useEffect(() => {
    setIsLoading(true);
    const category = currentCategory.id !== '0' ? `&category=${currentCategory.id}` : '';
    fetch(
      `https://62e276b3e8ad6b66d85c02f7.mockapi.io/pizzas/?page=${currentPage}&limit=8&sortBy=${currentFilter.sortProperty}&order=${currentFilter.sortOrder}$&search=${search}${category}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [currentCategory, currentFilter, search, currentPage]);

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
