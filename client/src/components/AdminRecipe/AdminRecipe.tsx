import styles from './AdminRecipe.module.scss';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';

export const AdminRecipe = () => {
  const setIsOpen = useModalFramesStore((state) => state.setIsOpen);

  return (
    <div className={styles.adminRecipe}>
      <button onClick={() => setIsOpen('recipeModalIsOpen', true)}>Добавить рецепт</button>
    </div>
  );
};
