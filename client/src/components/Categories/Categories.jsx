import React from 'react';
import styles from './Categories.module.scss';

export const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', ' Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div>
      <ul className={styles.list}>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={`${styles.item} ${value === index ? `${styles.active}` : ''}`}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
