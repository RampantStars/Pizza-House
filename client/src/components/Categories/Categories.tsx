import React from 'react';
import { categoryStore } from '../../Utils/Store/Store';
import styles from './Categories.module.scss';
import { CategorySkeleton } from './Skeleton';

export const Categories: React.FC = () => {
  const currentCategory = categoryStore((state) => state.currentCategory);
  const categories = categoryStore((state) => state.categories);
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
                onClick={() => selectCategory(category)}
                className={`${styles.item} ${
                  currentCategory.id === category.id ? `${styles.active}` : ''
                }`}>
                {category.value}
              </li>
            ))}
      </ul>
    </div>
  );
};
