import styles from './AdminRecipe.module.scss';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { useRecipeStore } from '../../Utils/Stores/RecipeStore';
import { RecipeCardAdmin } from '../RecipeCardAdmin';

export const AdminRecipe = () => {
  const setIsOpen = useModalFramesStore((state) => state.setIsOpen);
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className={styles.adminRecipe}>
      <button className={styles.btn} onClick={() => setIsOpen('recipeModalIsOpen', true)}>
        Добавить рецепт
      </button>
      <ul className={styles.recipeList}>
        {recipes.map((recipe) => (
          <li className={styles.item} key={recipe.id}>
            <RecipeCardAdmin {...recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};
