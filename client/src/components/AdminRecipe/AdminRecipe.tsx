import styles from './AdminRecipe.module.scss';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { useRecipeStore } from '../../Utils/Stores/RecipeStore';
import { RecipeCardAdmin } from '../RecipeCardAdmin';
import { shallow } from 'zustand/shallow';
import { useCategoryStore } from '../../Utils/Stores/CategoryStore';
import { useFilterStore } from '../../Utils/Stores/FilterStore';
import React from 'react';

export const AdminRecipe = () => {
  const setIsOpen = useModalFramesStore((state) => state.setIsOpen);

  const { recipes, fetchRecipes } = useRecipeStore(
    ({ recipes, fetchRecipes }) => ({
      recipes,
      fetchRecipes,
    }),
    shallow,
  );

  React.useEffect(() => {
    fetchRecipes(
      '',
      { id: 0, name: 'Все' },
      {
        name: 'По алфавиту',
        sortProperty: 'name',
        sortOrder: 'ASC',
      },
      1,
    );
  }, []);

  return (
    <div className={styles.adminRecipe}>
      <button className={styles.btn} onClick={() => setIsOpen('recipeModalIsOpen', true)}>
        Добавить рецепт
      </button>
      <h2>В продаже</h2>
      <ul className={styles.recipeList}>
        {recipes.map(
          (recipe) =>
            recipe.inStock && (
              <li className={styles.item} key={recipe.id}>
                <RecipeCardAdmin {...recipe} />
              </li>
            ),
        )}
      </ul>
      <div>
        {!!recipes.filter((recipe) => !recipe.inStock).length && (
          <>
            <h2>Нет в продаже</h2>
            <ul className={styles.recipeList}>
              {recipes.map(
                (recipe) =>
                  !recipe.inStock && (
                    <li className={styles.item} key={recipe.id}>
                      <RecipeCardAdmin {...recipe} />
                    </li>
                  ),
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
