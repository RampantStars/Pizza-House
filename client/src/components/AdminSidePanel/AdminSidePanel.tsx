import React from 'react';
import styles from './AdminSidePanel.module.scss';

export const AdminSidePanel = ({
  setController,
}: {
  setController: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={styles.adminSidePanel}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={() => setController('Recipe')}>
          Рецепты
        </li>
        <li className={styles.item} onClick={() => setController('Ingredient')}>
          Ингредиенты
        </li>
        <li className={styles.item} onClick={() => setController('AdditionalIngredient')}>
          Дополнительные ингредиенты
        </li>
        <li className={styles.item} onClick={() => setController('Size')}>
          Размер теста
        </li>
        <li className={styles.item} onClick={() => setController('DoughType')}>
          Тип теста
        </li>
        <li className={styles.item} onClick={() => setController('Users')}>
          Пользователи
        </li>
      </ul>
    </div>
  );
};
