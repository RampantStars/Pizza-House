import { Dialog } from '@headlessui/react';
import { RecipeCreateForm } from '../../Forms';

import styles from './RecipeModal.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useRecipeStore } from '../../../Utils/Stores/RecipeStore';

export const RecipeModal = () => {
  const { recipeModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ recipeModalIsOpen, setIsOpen }) => ({ recipeModalIsOpen, setIsOpen }),
  );

  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <Dialog
      open={recipeModalIsOpen}
      onClose={() => setIsOpen('recipeModalIsOpen', !recipeModalIsOpen)}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Создание рецепта</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Создание рецепта пиццы
          </Dialog.Description>
          <RecipeCreateForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
