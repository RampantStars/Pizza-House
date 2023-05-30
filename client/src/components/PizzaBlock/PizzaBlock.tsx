import React from 'react';

import styles from './PizzaBlock.module.scss';
import button from '../../scss/button.module.scss';
import { Recipe } from '../../Utils/types/types';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { useRecipeStore } from '../../Utils/Stores/RecipeStore';

export const PizzaBlock: React.FC<Recipe> = (recipe) => {
  const { recipeVariationModal, setIsOpen } = useModalFramesStore(
    ({ recipeVariationModal, setIsOpen }) => ({
      recipeVariationModal,
      setIsOpen,
    }),
  );

  const selectRecipe = useRecipeStore((state) => state.selectRecipe);

  return (
    <div className={styles.PizzaContainer}>
      <div className={styles.pizza_block}>
        <img
          className={styles.image}
          src={`http://localhost:5000/${recipe.imageUrl}`}
          alt="Pizza"
        />
        <h4 className={styles.title}>{recipe.name}</h4>

        <div className={styles.info}>
          <p>{recipe.description}</p>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Типы:</p>
            <ul className={styles.info__list}>
              {recipe.doughtTypes.map((type) => (
                <li key={type.id} className={styles.item}>
                  {type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.info__item}>
            <p className={styles.info__title}>Размеры:</p>
            <ul className={styles.info__list}>
              {recipe.sizes.map((size) => (
                <li key={size.id} className={styles.item}>
                  {size.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {recipe.price} ₽</div>
          <button
            onClick={async () => {
              await selectRecipe(recipe.id);
              setIsOpen('recipeVariationModal', !recipeVariationModal);
            }}
            className={`${button.button} ${button.outline} ${button.add}`}>
            <span>Выбрать</span>
          </button>
        </div>
      </div>
    </div>
  );
};
