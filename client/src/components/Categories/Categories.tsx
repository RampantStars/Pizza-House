import React from 'react';
import { shallow } from 'zustand/shallow';
import { useCategoryStore } from '../../Utils/Stores/CategoryStore';
import styles from './Categories.module.scss';
import { CategorySkeleton } from './Skeleton';

export const Categories: React.FC = () => {
  const { currentCategory, categories, selectCategory, isLoad } = useCategoryStore(
    ({ currentCategory, categories, selectCategory, isLoad }) => ({
      currentCategory,
      categories,
      selectCategory,
      isLoad,
    }),
    shallow,
  );

  return (
    <div>
      <ul className={styles.list}>
        {isLoad
          ? [...new Array(6)].map((_, index) => <CategorySkeleton key={index} />)
          : categories.map((category) => (
              <li
                key={category.id}
                onClick={() => selectCategory(category)}
                className={`${styles.item} ${
                  currentCategory.id === category.id ? `${styles.active}` : ''
                }`}>
                {category.name}
              </li>
            ))}
      </ul>
    </div>
  );
};
