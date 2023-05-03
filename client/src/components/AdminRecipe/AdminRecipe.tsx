import styles from './AdminRecipe.module.scss';
import { RecipeModal } from '../Modals/RecipeModal';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';

export const AdminRecipe = () => {
  const setRecipeModalIsOpen = useModalFramesStore((state) => state.setRecipeModalIsOpen);

  return (
    <div className={styles.adminRecipe}>
      <RecipeModal />
      <button onClick={() => setRecipeModalIsOpen()}>Добавить рецепт</button>
    </div>
  );
};
