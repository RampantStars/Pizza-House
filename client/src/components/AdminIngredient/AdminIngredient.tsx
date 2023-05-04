import React from 'react';
import styles from './AdminIngredient.module.scss';
import { useIngredientStore } from '../../Utils/Stores/IngredientStore';
import { IngredientCard } from '../IngredientCard';
import { useTypeIngredientStore } from '../../Utils/Stores/TypeIngredientSrote';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';

export const AdminIngredient = () => {
  const ingredients = useIngredientStore((state) => state.ingredients);
  const typeIngredients = useTypeIngredientStore((state) => state.typeIngredients);
  const { setIsOpen, ingredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, ingredientModalIsOpen }) => ({ setIsOpen, ingredientModalIsOpen }),
  );

  return (
    <div className={styles.adminIngredient}>
      <button
        onClick={() => setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen)}
        className={styles.btn}>
        Добавить ингредиент
      </button>
      {typeIngredients.map((typeIngredient) => (
        <>
          <h2 className={styles.title}>Тип ингредиента {typeIngredient.name}</h2>
          <div className={styles.ingredientList}>
            {ingredients.map((ingredient) =>
              ingredient.typeIngredient.name === typeIngredient.name ? (
                <IngredientCard key={ingredient.id} {...ingredient} />
              ) : (
                ''
              ),
            )}
          </div>
        </>
      ))}
    </div>
  );
};
