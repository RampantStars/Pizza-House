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
import { useRecipeStore } from '../../Utils/Stores/RecipeStore';
import { Recipe } from '../../Utils/types/types';
import { RecipeVariationModal } from '../../components/Modals/RecipeVariationModal';

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { recipes, meta, isLoading } = useRecipeStore(({ recipes, meta, isLoading }) => ({
    recipes,
    meta,
    isLoading,
  }));

  const currentCategory = useCategoryStore((state) => state.currentCategory);
  const { search, currentFilter } = useFilterStore(
    ({ search, currentFilter }) => ({
      search,
      currentFilter,
    }),
    shallow,
  );
  console.log('isLoading :>> ', isLoading);

  React.useEffect(() => {
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
          ? [...new Array(6)].map((_, index) => <Skeleton key={`s-${index}`} />)
          : recipes.map((item: Recipe) => <PizzaBlock key={item.id} {...item} />)}
      </div>
      {!isLoading && (
        <Pagination
          onChangePage={(number: number) => {
            setCurrentPage(number);
          }}
          meta={meta}
        />
      )}
      <RecipeVariationModal />
    </div>
  );
};
