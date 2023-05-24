import { useAdditionalIngredientStore } from '../../Utils/Stores/AdditionalIngredientsStore';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { AdditionalIngredientCard } from '../AdditionalIngredientCard';
import styles from './AdminAdditionalIngredients.module.scss';

export const AdminAdditionalIngredients = () => {
  const additionalIngredients = useAdditionalIngredientStore(
    (state) => state.additionalIngredients,
  );
  const { setIsOpen, additionalIngredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, additionalIngredientModalIsOpen }) => ({
      setIsOpen,
      additionalIngredientModalIsOpen,
    }),
  );

  return (
    <div className={styles.adminAdditionalIngredients}>
      <button
        onClick={() =>
          setIsOpen('additionalIngredientModalIsOpen', !additionalIngredientModalIsOpen)
        }
        className={styles.btn}>
        Добавить дополнительный ингредиент
      </button>
      <div className={styles.ingredientList}>
        {additionalIngredients.map((additionalIngredient) => (
          <AdditionalIngredientCard key={additionalIngredient.id} {...additionalIngredient} />
        ))}
      </div>
    </div>
  );
};
