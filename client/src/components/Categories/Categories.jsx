import React from 'react';
import { categoryStore } from '../../Utils/Store/Store';
import styles from './Categories.module.scss';
import { CategorySkeleton } from './Skeleton';

export const Categories = ({ value }) => {
  const categories = categoryStore((state) => state.category);
  const selectCategory = categoryStore((state) => state.selectCategory);

  const isLoading = false;
  return (
    <div>
      <ul className={styles.list}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <CategorySkeleton key={index} />)
          : categories.map((category) => (
              <li
                key={category.id}
                onClick={() => selectCategory(category.id)}
                className={`${styles.item} ${value === category.id ? `${styles.active}` : ''}`}>
                {category.value}
              </li>
            ))}
      </ul>
    </div>
  );
};
